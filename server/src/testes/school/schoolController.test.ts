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
});