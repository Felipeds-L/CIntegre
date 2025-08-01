import { Address } from '@prisma/client';
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

    it('Should return 400 if some Address data is missing', async () => {
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

    it('Should return 200 if it can looking for a Address', async() =>{
            const mockAddress = {
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
                state: 'Pernambuco'
            };
    
            req.params = {
                id: '1'
            }
            
            addressServiceMock.getAddress.mockResolvedValue(mockAddress);
    
            await addressController.getAddress(req as Request, res as Response);
            expect(addressServiceMock.getAddress).toHaveBeenCalledWith(1)
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockAddress)
        })
    
        it('Should return 404 if Address not found', async() =>{
            req.params = {
                id: '2302'
            };
    
            addressServiceMock.getAddress.mockResolvedValue(null);
    
            await addressController.getAddress(req as Request, res as Response);
            expect(addressServiceMock.getAddress).toHaveBeenCalledWith(2302)
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({error: 'Address not found'})
        })
    
        it('Should return 200 if all Addres are found', async() => {
            const mockAddress = [{
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
                state: 'Pernambuco'
            }];
    
            addressServiceMock.getAllAddresses.mockResolvedValue(mockAddress);
            await addressController.getAllAddress(req as Request, res as Response);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockAddress)
        });
    
    
        it('Should return 500 if it throws', async ()=> {
            addressServiceMock.getAllAddresses.mockRejectedValue(new Error('Internal Error Service'))
    
            await addressController.getAllAddress(req as Request, res as Response);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({error: 'Internal Error Service'})
        })
    
        it('Should return 200 if it Address is updated', async()=> {
            const mockAddress = {
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
                state: 'Pernambuco'
            };
    
            req.params = {id: '1'}
            req.body = {
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
            }
    
            addressServiceMock.updateAddress.mockResolvedValue(mockAddress);
    
            await addressController.updateAddress(req as Request, res as Response);
            expect(addressServiceMock.updateAddress).toHaveBeenCalledWith(1, req.body)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith(mockAddress)
        })
        
        it('Should return 404 if Address to update is not found', async () => {
            req.params = { id: '99' };
            req.body = {
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
            }
    
            addressServiceMock.updateAddress.mockResolvedValue(null as unknown as Address);
    
            await addressController.updateAddress(req as Request, res as Response);
    
            expect(addressServiceMock.updateAddress).toHaveBeenCalledWith(99, req.body);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Address not found' });
        });
    
        it('Should return 200 if Address is deleted', async() => {
            const mockAddress = {
                id: 1,
                street: 'Rua x',
                house_number: 5,
                cep: '50740587',
                complement:  null,
                city: 'Recife',
                state: 'Pernambuco'
            };
    
            req.params = {
                id: '1'
            }
    
            addressServiceMock.deleteAddress.mockResolvedValue(mockAddress);
    
            await addressController.deleteAddress(req as Request, res as Response);
    
            expect(addressServiceMock.deleteAddress).toHaveBeenCalledWith(1)
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.json).not.toHaveBeenCalledWith()
        });
    
        it('Should return 404 if Address not found to delete', async() =>{
            req.params = { id: '99'};
            
            addressServiceMock.deleteAddress.mockResolvedValue(null as unknown as Address);
    
            await addressController.deleteAddress(req as Request, res as Response);
    
            expect(addressServiceMock.deleteAddress).toHaveBeenCalledWith(99);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({error: 'Address not found'})
        })
    
        it('Should return 500 if delete throws', async() => {
            req.params = {id: '99'}
            addressServiceMock.deleteAddress.mockRejectedValue(new Error('Internal Error Service'));
    
            await addressController.deleteAddress(req as Request, res as Response);
    
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Internal Error Service' });
        })
});