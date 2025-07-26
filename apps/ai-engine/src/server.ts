import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import { API_ENDPOINTS, formatMessage } from '@platform/shared-utils';
import type { ApiResponse } from '@platform/shared-types';

dotenv.config();

const app = express();
const PORT = process.env.AI_ENGINE_PORT || 5000;

// Initialize AI clients
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Middleware
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  const response: ApiResponse = {
    success: true,
    message: 'AI Engine is running',
    data: {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      aiProviders: {
        gemini: !!process.env.GEMINI_API_KEY,
        openai: !!process.env.OPENAI_API_KEY,
      },
    },
  };
  res.json(response);
});

// Test AI providers
app.post('/test-ai', async (req, res) => {
  try {
    const { message } = req.body;

    // Try Gemini first
    let aiResponse;
    let provider = 'gemini';

    try {
      const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(
        message || 'Hello, test message'
      );
      const response = await result.response;
      aiResponse = response.text();
    } catch (geminiError) {
      console.log('Gemini failed, falling back to OpenAI:', geminiError);

      // Fallback to OpenAI
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: message || 'Hello, test message' }],
        model: 'gpt-3.5-turbo',
      });
      aiResponse = completion.choices[0].message.content;
      provider = 'openai';
    }

    const response: ApiResponse = {
      success: true,
      message: formatMessage('AI test successful'),
      data: {
        provider,
        aiResponse,
        timestamp: new Date().toISOString(),
      },
    };
    res.json(response);
  } catch (error) {
    console.error('AI Test Error:', error);
    const response: ApiResponse = {
      success: false,
      error: 'AI test failed',
      message: 'Both AI providers failed',
    };
    res.status(500).json(response);
  }
});

// WhatsApp webhook (placeholder for now)
app.post('/webhook/whatsapp', (req, res) => {
  console.log('WhatsApp webhook received:', req.body);

  const response: ApiResponse = {
    success: true,
    message: 'WhatsApp webhook processed',
  };
  res.json(response);
});

// Error handling
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    const response: ApiResponse = {
      success: false,
      error: 'Internal Server Error',
    };
    res.status(500).json(response);
  }
);

app.listen(PORT, () => {
  console.log(`🤖 AI Engine running on http://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test AI: POST http://localhost:${PORT}/test-ai`);
});
