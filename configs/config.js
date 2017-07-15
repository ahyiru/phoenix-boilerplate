module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'Yiru Secret',
  SALT:process.env.SALT||'yiru-20170323',

  PORT:process.env.PORT || 9200,
  PRO_PORT:process.env.PRO_PORT||9201,
  HOST:process.env.HOST || 'http://localhost/',
  SERVICE_HOST:process.env.SERVICE_HOST || 'http://localhost:18080/',

};