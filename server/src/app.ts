import express from 'express';
import { setUserRoutes } from './user/userRoutes';
import cors from 'cors';
import { setSchoolRoutes } from './school/schoolRoutes';
import { setAddressRoutes } from './address/addressRoutes';
import { setOngRoutes } from './ong/ongRoutes';
import { setSchoolActivityRoutes } from './schoolActivity/schoolActivityRoutes';
import { setActivityRoutes } from './activity/activityRoutes';
import { setAuthRoutes } from './auth/authRoutes';

const app = express();
const PORT: number = parseInt(process.env.PORT!);
const HOST = String(process.env.HOST);

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://172.18.0.4:3000',
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

setUserRoutes(app);
setSchoolRoutes(app);
setAddressRoutes(app);
setOngRoutes(app);
setSchoolActivityRoutes(app);
setActivityRoutes(app);
setAuthRoutes(app);

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    cors: process.env.CORS_ORIGIN,
  });
});

app.listen(PORT, HOST, () => {
  console.log(
    `Server is running on http://${HOST}:${PORT}`,
  );
  console.log(
    `🌐 CORS enabled for: ${
      process.env.CORS_ORIGIN || 'http://localhost:3000'
    }`,
  );
});
