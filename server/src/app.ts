import express from 'express';
import { setUserRoutes } from './user/userRoutes';
import { setSchoolRoutes } from './school/schoolRoutes';
import { setAddressRoutes } from './address/addressRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
var cors = require('cors')

app.use(cors);

setUserRoutes(app);
setSchoolRoutes(app);
setAddressRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});