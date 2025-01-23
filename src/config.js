// export const PORT = 4000;

console.log(process.env.HELLO); // Test read env variable

// DB Variables ENV
export const DB_USER = process.env.DB_USER;
export const DB_HOST = process.env.DB_HOST;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;

export const PORT = process.env.PORT || 3000; // process.env.PORT toma el puerto que asigna la plataforma cloud.
