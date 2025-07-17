import express from 'express';
import { json } from 'body-parser';
import { setUserRoutes } from './user/userRoutes';
import { setSchoolRoutes } from './school/schoolRoutes';
import { setAddressRoutes } from './address/addressRoutes';
import { setOngRoutes } from './ong/ongRoutes';
import { setPhotoRoutes } from './photo/photoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setUserRoutes(app);
setSchoolRoutes(app);
setAddressRoutes(app);
setOngRoutes(app);
setPhotoRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});