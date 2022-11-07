namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
    PASSWORD_EMAIL: string;
    EMAIL: string;
<<<<<<< HEAD
    API_KEY: string;
    CLOUD_NAME: string;
    API_SECRET: string;
=======
>>>>>>> fb554da7b9d44d3db89ce91a7f3753aff484be7d
  }
}

namespace Express {
  interface Request {
    user: string;
  }
}
