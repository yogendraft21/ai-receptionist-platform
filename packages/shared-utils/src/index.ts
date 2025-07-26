// Validation utilities
export const validateEmail = (email: string): boolean => {
  return email.includes('@');
};

export const formatMessage = (msg: string): string => {
  return `✅ ${msg}`;
};

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  USERS: '/api/users',
  AGENTS: '/api/agents',
  CONVERSATIONS: '/api/conversations'
} as const;

// Test Config
export const TEST_CONFIG = {
  APP_NAME: 'AI Receptionist',
  VERSION: '1.0.0'
} as const;