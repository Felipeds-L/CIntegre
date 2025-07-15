import { SchoolController } from '../../school/schoolController';
import SchoolService from '../../school/schoolService';
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
                cnpj: '12345678',
                numero_estudantes: 150,
                pontos_acumulados: 0
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
            numero_estudantes: 150,
            pontos_acumulados: 0
        }

        schoolServiceMock.createSchool.mockRejectedValue(mockSchool);

        await schoolController.createSchool(req as Request, res as Response);
        expect(schoolServiceMock.createSchool).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockSchool)
    })
});