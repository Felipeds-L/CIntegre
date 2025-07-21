import { User } from "@prisma/client";
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
                name: "Felipe",
                email: "teste@teste.com",
                address_id: 1,
                phone_number: "99279927",
                password: "1234"
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
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927",
            password: "1234"
        };

        userServiceMock.createUser.mockResolvedValue(mockUser);

        await userController.createUser(req as Request, res as Response);
        expect(userServiceMock.createUser).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockUser);
    })

    it('Should not create a User', async () => {
        userServiceMock.createUser.mockRejectedValue(new Error('Error on User Creation'))

        await userController.createUser(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Error on User Creation' })
    });

    it('Should return 400 if a user data is missing', async () => {
        req.body = {
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927"
        }

        await userController.createUser(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Missing a required field' })
    });

    it('Should return 200 if it can looking for a User', async () => {
        const mockUser = {
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927",
            password: "1234"
        };

        req.params = {
            id: '1'
        }

        userServiceMock.getUser.mockResolvedValue(mockUser);

        await userController.getUser(req as Request, res as Response);
        expect(userServiceMock.getUser).toHaveBeenCalledWith(1)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockUser)
    })

    it('Should return 404 if User not found', async () => {
        req.params = {
            id: '2302'
        };

        userServiceMock.getUser.mockResolvedValue(null);

        await userController.getUser(req as Request, res as Response);
        expect(userServiceMock.getUser).toHaveBeenCalledWith(2302)
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'User not found' })
    })

    it('Should return 200 if all Users are found', async () => {
        const mockUser = [{
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927",
            password: "1234"
        }];

        userServiceMock.getAllUsers.mockResolvedValue(mockUser);
        await userController.getAllUsers(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockUser)
    });


    it('Should return 500 if it throws', async () => {
        userServiceMock.getAllUsers.mockRejectedValue(new Error('Internal Error Service'))

        await userController.getAllUsers(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Internal Error Service' })
    })

    it('Should return 200 if it User is updated', async () => {
        const mockUser = {
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927",
            password: "1234"
        };

        req.params = { id: '1' }
        req.body = {
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927"
        }

        userServiceMock.updateUser.mockResolvedValue(mockUser);

        await userController.updateUser(req as Request, res as Response);
        expect(userServiceMock.updateUser).toHaveBeenCalledWith(1, req.body)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(mockUser)
    })

    it('Should return 404 if User to update is not found', async () => {
        req.params = { id: '99' };
        req.body = {
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927"
        }

        userServiceMock.updateUser.mockResolvedValue(null as unknown as User);

        await userController.updateUser(req as Request, res as Response);

        expect(userServiceMock.updateUser).toHaveBeenCalledWith(99, req.body);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('Should return 200 if User is deleted', async () => {
        const mockUser = {
            id: 1,
            username: "Milk",
            name: "Felipe",
            email: "teste@teste.com",
            address_id: 1,
            phone_number: "99279927",
            password: "1234"
        };

        req.params = {
            id: '1'
        }

        userServiceMock.deleteUser.mockResolvedValue(mockUser);

        await userController.deleteUser(req as Request, res as Response);

        expect(userServiceMock.deleteUser).toHaveBeenCalledWith(1)
        expect(res.status).toHaveBeenCalledWith(204);
        expect(res.json).not.toHaveBeenCalledWith()
    });

    it('Should return 404 if User not found to delete', async () => {
        req.params = { id: '99' };

        userServiceMock.deleteUser.mockResolvedValue(null as unknown as User);

        await userController.deleteUser(req as Request, res as Response);

        expect(userServiceMock.deleteUser).toHaveBeenCalledWith(99);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'User not found' })
    })

    it('Should return 500 if delete throws', async () => {
        req.params = { id: '99' }
        userServiceMock.deleteUser.mockRejectedValue(new Error('Internal Error Service'));

        await userController.deleteUser(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Internal Error Service' });
    })
})