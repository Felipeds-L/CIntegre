import { Router } from 'express';
import { AddressController } from '../controller/addressController';

const router = Router();
const addressController = new AddressController();

export function setAddressRoutes(app) {
    app.use('/api/addresses', router);
    router.post('/', addressController.createAddress.bind(addressController));
    router.get('/:id', addressController.getAddress.bind(addressController));
    router.put('/:id', addressController.updateAddress.bind(addressController));
    router.delete('/:id', addressController.deleteAddress.bind(addressController));
}