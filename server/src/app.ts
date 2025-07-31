import express from 'express';
import { setUserRoutes } from './user/userRoutes';
import { setSchoolRoutes } from './school/schoolRoutes';
import { setAddressRoutes } from './address/addressRoutes';
import { setOngRoutes } from './ong/ongRoutes';
import { setPhotoRoutes } from './photo/photoRoutes';
import { setSocialMediasRoutes } from './socialMedias/socialMediasRoutes';
import { setSchoolActionRoutes } from './schoolAction/schoolActionRoutes';
import { setSocialActionRoutes } from './socialAction/socialActionRoutes';
import { setAuthRoutes } from './auth/authRoutes';

const app = express();
const PORT = process.env.PORT || 3333;
var cors = require('cors');

app.use(cors());
app.use(express.json());

setUserRoutes(app);
setSchoolRoutes(app);
setAddressRoutes(app);
setOngRoutes(app);
setPhotoRoutes(app);
setSocialMediasRoutes(app);
setSchoolActionRoutes(app);
setSocialActionRoutes(app);
setAuthRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
