const env = (process.env.NODE_ENV as 'development' | 'staging' | 'production' | 'test') || 'staging';

const masterConfig = {
  development: {
    server_url: 'http://localhost:5000',
    BASE_URL: 'http://localhost:3000',
  },
  staging: {
    server_url: 'https://api.crystalpathshala.com',
    BASE_URL: 'https://api.crystalpathshala.com',
  },
  production: {
    server_url: 'https://api.crystalpathshala.com',
    BASE_URL: 'https://api.crystalpathshala.com',
  },
  test: {
    server_url: 'http://testserver:5000',
    BASE_URL: 'http://testserver:3000',
  },
};

const config = masterConfig[env as keyof typeof masterConfig];

if (!config) {
  throw new Error(`Environment configuration for '${env}' is not defined in masterConfig.`);
}

export const { server_url, BASE_URL } = config;
export const SERVER_ENV = env;