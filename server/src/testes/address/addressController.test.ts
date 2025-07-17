import { AddressController } from '../../address/addressController';
import AddressService from '../../address/addressService';
import { Response, Request } from 'express';

jest.mock('../../school/schoolService');

describe('AddressController', () => {
    let addressController: AddressController;
    let addressServiceMock: jest.Mocked<AddressService>;

    let req: Partial<Request>
    let res: Partial<Response>

    beforeEach(() => {
        addressServiceMock = new AddressService() as jest.Mocked<AddressService>;
        addressController = new AddressController();
        (addressController as any).schoolService = addressServiceMock;

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

    it('Should create a address', async () => {
        const mockAddress = {
            id: 1,
            street: 'Rua x',
            house_number: 5,
            cep: '50740587',
            complement:  null,
            city: 'Recife',
            state: 'Pernambuco'
        }

        addressServiceMock.createAddress.mockRejectedValue(mockAddress);

        await addressController.createAddress(req as Request, res as Response);
        expect(addressServiceMock.createAddress).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockAddress)
    });

    it('Should return 500 if some school data is missing', () => {
        req.body = {
            id: 1,
            street: 'Rua x',
            house_number: 5,
            cep: '50740587',
            complement:  null,
            city: 'Recife',
        }

        addressServiceMock.createAddress.mockRejectedValue(new Error('Missing required field'))

        await addressController.createAddress(req as Request, res as Response);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({error: 'Missing required field'})
    });
});