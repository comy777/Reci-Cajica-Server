namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
    PASSWORD_EMAIL: string;
    EMAIL: string;
    API_KEY: string;
    CLOUD_NAME: string;
    API_SECRET: string;
  }
}

namespace Express {
  interface Request {
    user: string;
  }
}
