import express from 'express';
import { setUserRoutes } from './user/userRoutes';
import { setSchoolRoutes } from './school/schoolRoutes';
import { setAddressRoutes } from './address/addressRoutes';
import { setOngRoutes } from './ong/ongRoutes';
import { setSchoolActivityRoutes } from './schoolActivity/schoolActivityRoutes';
import { setActivityRoutes } from './activity/activityRoutes';
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
setSchoolActivityRoutes(app);
setActivityRoutes(app);
setAuthRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
