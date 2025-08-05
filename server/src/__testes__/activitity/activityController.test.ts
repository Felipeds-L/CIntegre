import {
  AreaExpertise,
  Category,
  Status,
} from '@prisma/client';
import { ActivityController } from '../../activity/activityController';
import { ActivityService } from '../../activity/activityService';
import { Response, Request } from 'express';

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
});
