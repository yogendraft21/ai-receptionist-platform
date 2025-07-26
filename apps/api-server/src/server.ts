import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { API_ENDPOINTS, validateEmail } from '@platform/shared-utils';
import type { ApiResponse, User } from '@platform/shared-types';

dotenv.config();

const app = express();
const PORT = process.env.API_SERVER_PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'API Server is running',
    data: {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    },
  };
  res.json(response);
});

app.get('/test', (req, res) => {
  const email = 'test@example.com';
  const response: ApiResponse = {
    success: true,
    message: 'Shared packages working',
    data: {
      emailValid: validateEmail(email),
      endpoints: API_ENDPOINTS,
    },
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});
