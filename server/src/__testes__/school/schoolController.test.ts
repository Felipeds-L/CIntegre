import { School } from '@prisma/client';
import { SchoolController } from '../../school/schoolController';
import {SchoolService} from '../../school/schoolService';
import { Response, Request } from 'express';

jest.mock('../../school/schoolService');

describe('SchoolController', () => {
    let schoolController: SchoolController;
    let schoolServiceMock: jest.Mocked<SchoolService>;

    let req: Partial<Request>
    let res: Partial<Response>

    beforeEach(() => {
        schoolServiceMock = new SchoolService() as jest.Mocked<SchoolService>;
        schoolController = new SchoolController();
        (schoolController as any).schoolService = schoolServiceMock;

        req = {
            body: {
                id: 1,
                cnpj: '12345678',
                student_number: 150,
                score: 1
            }
        };
        

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('Should create a School', async () => {
        const mockSchool = {
            id: 1,
            cnpj: '12345678',
            student_number: 150,
            score: 1
        }

        schoolServiceMock.createSchool.mockResolvedValue(mockSchool);

        await schoolController.createSchool(req as Request, res as Response);
        expect(schoolServiceMock.createSchool).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockSchool);
    });

    it('Should return 400 if some school data is missing',async () => {
        req.body = {
            id: 1,
            cnpj: '12345678',
        }

        await schoolController.createSchool(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({error: 'Missing a required field'})
    });

    it('Should return 200 if it can looking for a school', async() =>{
        const mockSchool = {
            id: 1,
            cnpj: '12345678',
            student_number: 150,
            score: 1
        }

        req.params = {
            id: '1'
        }
        
        schoolServiceMock.getSchool.mockResolvedValue(mockSchool);

        await schoolController.getSchool(req as Request, res as Response);
        expect(schoolServiceMock.getSchool).toHaveBeenCalledWith(1)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockSchool)
    })

    it('Should return 404 if School not found', async() =>{
        req.params = {
            id: '2302'
        };

        schoolServiceMock.getSchool.mockResolvedValue(null);

        await schoolController.getSchool(req as Request, res as Response);
        expect(schoolServiceMock.getSchool).toHaveBeenCalledWith(2302)
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({error: 'School not found'})
    })

    it('Should return 200 if all Schools are found', async() => {
        const mockSchool = [
            {
                id: 1,
                cnpj: '12345678',
                student_number: 150,
                score: 1
            }
        ]

        schoolServiceMock.getAllSchools.mockResolvedValue(mockSchool);
        await schoolController.getAllSchools(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockSchool)
    });


    it('Should return 500 if it throws', async ()=> {
        schoolServiceMock.getAllSchools.mockRejectedValue(new Error('Internal Error Service'))

        await schoolController.getAllSchools(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({error: 'Internal Error Service'})
    })

    it('Should return 200 if it School is updated', async()=> {
        const mockSchool = {
            id: 1,
            cnpj: '12345',
            student_number: 1200,
            score: 10
        }

        req.params = {id: '1'}
        req.body = {
            cnpj: '12345',
            student_number: 1200,
            score: 10
        }

        schoolServiceMock.updateSchool.mockResolvedValue(mockSchool);

        await schoolController.updateSchool(req as Request, res as Response);
        expect(schoolServiceMock.updateSchool).toHaveBeenCalledWith(1, req.body)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(mockSchool)
    })
    
    it('Should return 404 if school to update is not found', async () => {
        req.params = { id: '99' };
        req.body = {
            cnpj: '00000000',
            student_number: 0,
            score: 0
        };

        schoolServiceMock.updateSchool.mockResolvedValue(null as unknown as School);

        await schoolController.updateSchool(req as Request, res as Response);

        expect(schoolServiceMock.updateSchool).toHaveBeenCalledWith(99, req.body);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'School not found' });
    });

    it('Should return 200 if school is deleted', async() => {
        const mockSchool = {
            id: 1,
            cnpj: '12345678',
            student_number: 150,
            score: 1
        }

        req.params = {
            id: '1'
        }

        schoolServiceMock.deleteSchool.mockResolvedValue(mockSchool);

        await schoolController.deleteSchool(req as Request, res as Response);

        expect(schoolServiceMock.deleteSchool).toHaveBeenCalledWith(1)
        expect(res.status).toHaveBeenCalledWith(204);
        expect(res.json).not.toHaveBeenCalledWith()
    });

    it('Should return 404 if School not found to delete', async() =>{
        req.params = { id: '99'};
        
        schoolServiceMock.deleteSchool.mockResolvedValue(null as unknown as School);

        await schoolController.deleteSchool(req as Request, res as Response);

        expect(schoolServiceMock.deleteSchool).toHaveBeenCalledWith(99);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({error: 'School not found'})
    })

    it('Should return 500 if delete throws', async() => {
        req.params = {id: '99'}
        schoolServiceMock.deleteSchool.mockRejectedValue(new Error('Internal Error Service'));

        await schoolController.deleteSchool(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Internal Error Service' });
    })
});