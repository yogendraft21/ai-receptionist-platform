# AI Receptionist SaaS Platform

Multi-agent AI receptionist platform for SMBs using WhatsApp Business API.

## 🚀 Features

- **Multi-Agent Dashboard** - Create and manage multiple AI agents
- **WhatsApp Integration** - Connect with WhatsApp Business API
- **Customizable Greetings** - Personalized welcome messages
- **Knowledge Base** - Upload documents and business information
- **Workflow Automation** - Email, SMS, and appointment triggers
- **Analytics & Reports** - Conversation tracking and performance metrics
- **Multi-language Support** - Auto-detection and custom configurations

## 🏗️ Architecture

This is a TypeScript monorepo using Turbo for build orchestration.

```
├── apps/
│   ├── frontend/          # React dashboard
│   ├── api-server/        # Main backend API
│   └── ai-engine/         # AI processing service
└── packages/
    ├── shared-types/      # TypeScript interfaces
    └── shared-utils/      # Common utilities
```

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript
- **AI**: Google Gemini, OpenAI GPT
- **Database**: PostgreSQL (planned)
- **Authentication**: JWT
- **Deployment**: Railway, Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/ai-receptionist-platform.git
cd ai-receptionist-platform

# Install dependencies
npm install

# Copy environment files
cp apps/api-server/.env.example apps/api-server/.env
cp apps/ai-engine/.env.example apps/ai-engine/.env

# Add your API keys to .env files
```

### Development

```bash
# Start all services
npm run dev

# Run specific service
npm run dev --filter=frontend
npm run dev --filter=api-server
npm run dev --filter=ai-engine
```

### Building

```bash
# Build all packages
npm run build

# Build specific package
npm run build --filter=frontend
```

### Code Quality

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check
```

## 🎯 What's Running

- **Frontend**: http://localhost:5173 - React dashboard
- **API Server**: http://localhost:4000 - Main backend
- **AI Engine**: http://localhost:5000 - AI processing service

## 🚀 Deployment

### Frontend (Vercel)

- Deployed automatically from `main` branch
- Environment variables configured in Vercel dashboard

### Backend Services (Railway)

- `api-server` and `ai-engine` deployed as separate services
- Environment variables configured in Railway dashboard

## 📝 Environment Variables

### API Server

```env
NODE_ENV=production
JWT_SECRET=your-jwt-secret
API_SERVER_PORT=4000
```

### AI Engine

```env
NODE_ENV=production
GEMINI_API_KEY=your-gemini-key
OPENAI_API_KEY=your-openai-key
AI_ENGINE_PORT=5000
```

### Frontend

```env
VITE_API_BASE_URL=https://your-api-server.railway.app
VITE_AI_ENGINE_URL=https://your-ai-engine.railway.app
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yogendra Singh**

- AI Receptionist SaaS Platform
- WhatsApp automation for SMBs
