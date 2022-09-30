namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: number;
    MONGO_URI: string;
    PASSWORD_EMAIL: string;
    EMAIL: string;
  }
}

namespace Express {
  interface Request {
    user: string;
  }
}
