import { Router } from 'express';
import { AddressController } from './addressController';
import { authenticate } from '../middlewares/middleware';

const addressController = new AddressController();

export function setAddressRoutes(app: Router) {
  app.post(
    '/address',
    authenticate,
    addressController.createAddress.bind(addressController),
  );
  app.get(
    '/address/:id',
    authenticate,
    addressController.getAddress.bind(addressController),
  );
  app.get(
    '/address',
    authenticate,
    addressController.getAllAddress.bind(addressController),
  );
  app.put(
    '/address/:id',
    authenticate,
    addressController.updateAddress.bind(addressController),
  );
  app.delete(
    '/address/:id',
    authenticate,
    addressController.deleteAddress.bind(addressController),
  );
}
