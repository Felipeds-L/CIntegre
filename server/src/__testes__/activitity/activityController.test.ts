import {
  AreaExpertise,
  Category,
  Status,
} from '@prisma/client';
import { ActivityController } from '../../activity/activityController';
import { ActivityService } from '../../activity/activityService';
import { Response, Request } from 'express';
import { ActivityDTO } from '../../activity/activityDto';

jest.mock('../../activity/activityService');

describe('ActivityController', () => {
  let activityController: ActivityController;
  let activityServiceMock: jest.Mocked<ActivityService>;

  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    activityServiceMock =
      new ActivityService() as jest.Mocked<ActivityService>;
    activityController = new ActivityController();
    (activityController as any).activityService = activityServiceMock;

    req = {
      body: {
        id: 1,
        title: 'title test',
        photos: ['img1', 'img2'],
        description: 'description test',
        category: Category.donation,
        area_expertise: [AreaExpertise.tecnology],
        status: Status.open,
        pontuation: 100,
        ong_id: 1,
        ong: {
          id: 1,
          name: 'ong test',
          description: 'description test',
          start_year: 2022,
          phone_number: 'xxxxxxxxx',
          social_medias: ['twitter'],
        },
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('Should create an Activity', async () => {
    const mockActivity = {
      id: 1,
      title: 'title test',
      photos: ['img1', 'img2'],
      description: 'description test',
      category: Category.donation,
      area_expertise: [AreaExpertise.tecnology],
      status: Status.open,
      pontuation: 100,
      ong_id: 1,
      ong: {
        id: 1,
        name: 'ong test',
        description: 'description test',
        start_year: 2022,
        phone_number: 'xxxxxxxxx',
        social_medias: ['twitter'],
      },
    };

    activityServiceMock.createActivity.mockResolvedValue(
      mockActivity,
    );

    await activityController.createActivity(
      req as Request,
      res as Response,
    );
    expect(
      activityServiceMock.createActivity,
    ).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockActivity);
  });

  it('Should return 400 if some Activity data is missing', async() =>{
    req = {
      body: {
        id: 1,
        title: 'title test',
        category: Category.donation,
        area_expertise: [AreaExpertise.tecnology],
        status: Status.open,
        pontuation: 100
      },
    };

    await activityController.createActivity(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({error: 'Missing a required field'})
  })

  it('Should return 200 if it can looking for an Activity', async() =>{
    const mockActivity = {
      id: 1,
      title: 'title test',
      photos: ['img1', 'img2'],
      description: 'description test',
      category: Category.donation,
      area_expertise: [AreaExpertise.tecnology],
      status: Status.open,
      pontuation: 100,
      ong_id: 1,
      ong: {
        id: 1,
        name: 'ong test',
        description: 'description test',
        start_year: 2022,
        phone_number: 'xxxxxxxxx',
        social_medias: ['twitter'],
      },
    };

    req.params = {
      id: '1'
    }

    activityServiceMock.getActivity.mockResolvedValueOnce(mockActivity);

    await activityController.getActivity(req as Request, res as Response);
    expect(activityServiceMock.getActivity).toHaveBeenCalledWith(1)
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockActivity);
  });

  it('Should return 200 if it can looking for an Activity by ONG', async() =>{
    const mockActivity: ActivityDTO[] = [{
      id: 1,
      title: 'title test',
      photos: ['img1', 'img2'],
      description: 'description test',
      category: Category.donation,
      area_expertise: [AreaExpertise.tecnology],
      status: Status.open,
      pontuation: 100,
      ong_id: 1,
      ong: {
        id: 1,
        name: 'ong test',
        description: 'description test',
        start_year: 2022,
        phone_number: 'xxxxxxxxx',
        social_medias: ['twitter'],
      },
    }];

    req.params = {
      ongId: '1'
    }

    activityServiceMock.getActivitiesByOngId.mockResolvedValueOnce(mockActivity);

    await activityController.getActivityByOngId(req as Request, res as Response);
    expect(activityServiceMock.getActivitiesByOngId).toHaveBeenCalledWith(1)
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockActivity);
  });

  it('Should return 404 if Activity not found', async() =>{
    req.params = {
      id: '332'
    }

    activityServiceMock.getActivity.mockResolvedValue(null);

    await activityController.getActivity(
      req as Request,
      res as Response
    );

    expect(activityServiceMock.getActivity).toHaveBeenCalledWith(332);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({error: 'Social action not found'})
  });

  it('Should return 200 if all Activities are found', async() => {
    const mockActivity: ActivityDTO[] = [{
      id: 1,
      title: 'title test',
      photos: ['img1', 'img2'],
      description: 'description test',
      category: Category.donation,
      area_expertise: [AreaExpertise.tecnology],
      status: Status.open,
      pontuation: 100,
      ong_id: 1,
      ong: {
        id: 1,
        name: 'ong test',
        description: 'description test',
        start_year: 2022,
        phone_number: 'xxxxxxxxx',
        social_medias: ['twitter'],
      },
    }];

    activityServiceMock.getAllActivities.mockResolvedValue(mockActivity);

    await activityController.getAllActivities(req as Request, res as Response);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockActivity);
  })
});
