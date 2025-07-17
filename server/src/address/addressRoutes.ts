import { Router } from 'express';
import { AddressController } from './addressController';
;
const addressController = new AddressController();

export function setAddressRoutes(app: Router) {
    app.post('/address', addressController.createAddress.bind(addressController));
    app.get('/address/:id', addressController.getAddress.bind(addressController));
    app.get('/address', addressController.getAllAddress.bind(addressController));
    app.put('/address/:id', addressController.updateAddress.bind(addressController));
    app.delete('/address/:id', addressController.deleteAddress.bind(addressController));
}