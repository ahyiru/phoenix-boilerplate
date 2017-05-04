module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'Yiru Secret',
  SALT:process.env.SALT||'yiru-20170323',
  DATA_URI: process.env.DATA_URI || 'mongodb://localhost:27017/dataUI',

  // OAuth 2.0
  WEIXIN_APPID:process.env.WEIXIN_APPID || 'wx7f4df123f88372a5',
  WEIXIN_SECRET:process.env.WEIXIN_SECRET || '965981c4ee42e0bdde3df2b91b070ea4',
  WEIXIN_TOKENURL:process.env.WEIXIN_TOKENURL || 'https://api.weixin.qq.com/sns/oauth2/access_token',
  WEIXIN_INFOURL:process.env.WEIXIN_INFOURL || 'https://api.weixin.qq.com/sns/userinfo',
  PORT:process.env.PORT || 9200,
  PRO_PORT:process.env.PRO_PORT||9201,
  HOST:process.env.HOST || 'http://localhost/',
  SERVICE_HOST:process.env.SERVICE_HOST || 'http://localhost:18080/',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || '',
  TWITTER_SECRET: process.env.TWITTER_SECRET || ''
};