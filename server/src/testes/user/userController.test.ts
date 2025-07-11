import { UserController } from "../../user/userController";
import { UserService } from "../../user/userService";
import { Request, Response } from 'express';

jest.mock('../../user/userService');

describe('UserController', () => {
    let userController: UserController;
    let userServiceMock: jest.Mocked<UserService>;
    let req: Partial<Request>;
    let res: Partial<Response>;


    beforeEach(() => {
        userServiceMock = new UserService() as jest.Mocked<UserService>;
        userController = new UserController();
        (userController as any).userService = userServiceMock;

        req = {
            body: {
                id: 1,
                username: "Milk",
                nome: "Felipe",
                email: "teste@teste.com",
                address_id: 1
            }
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('Should Create a User', async () => {
        const mockUser = {
                id: 1,
                username: "Milk",
                nome: "Felipe",
                email: "teste@teste.com",
                adress_id: 1,
                address: 1,
                numeroContato: "99279927"
        };

        userServiceMock.createUser.mockResolvedValue(mockUser);

        await userController.createUser(req as Request, res as Response);
        expect(userServiceMock.createUser).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockUser);
    })

    it('Should not create a User', async ()=> {
        userServiceMock.createUser.mockRejectedValue(new Error('Error on User Creation'))

        await userController.createUser(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({error: 'Error on User Creation'})
    });

    it('Should return 500 if email user data is missing', async() => {
        req.body = {
            id: 1,
            username: "Milk",
            nome: "Felipe",
            adress_id: 1,
            address: 1,
            numeroContato: "99279927"
        }

        userServiceMock.createUser.mockRejectedValue(new Error('Missing required field: E-mail'));

        await userController.createUser(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Missing required field: E-mail' })
    });
})