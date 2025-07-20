import { AddressController } from '../../address/addressController';
import {AddressService} from '../../address/addressService';
import { Response, Request } from 'express';

jest.mock('../../address/addressService');

describe('AddressController', () => {
    let addressController: AddressController;
    let addressServiceMock: jest.Mocked<AddressService>;

    let req: Partial<Request>
    let res: Partial<Response>

    beforeEach(() => {
        addressServiceMock = new AddressService() as jest.Mocked<AddressService>;
        addressController = new AddressController();
        (addressController as any).addressService = addressServiceMock;

        req = {
            body: {
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
                state: 'Pernambuco'
            }
        };
        

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('Should create a address', async () => {
        const mockAddress = {
            id: 1,
            street: 'Rua x',
            house_number: 5,
            cep: '50740587',
            complement:  null,
            city: 'Recife',
            state: 'Pernambuco'
        };

        addressServiceMock.createAddress.mockResolvedValue(mockAddress);

        await addressController.createAddress(req as Request, res as Response);
        expect(addressServiceMock.createAddress).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockAddress)
    });

    it('Should return 400 if some school data is missing', async () => {
        req.body = {
            id: 1,
            street: 'Rua x',
            house_number: 5,
            cep: '50740587',
            complement:  null,
            city: 'Recife',
        }


        await addressController.createAddress(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({error: 'Missing a required field'})
    });
});