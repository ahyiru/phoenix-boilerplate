module.exports={
	TOKEN_SECRET:process.env.TOKEN_SECRET||'yiru-20170116',
	SALT:process.env.SALT||'yiru-20170116',
	URI:process.env.URL||'mongodb://localhost:27017/test',
	HOST:process.env.IP||'localhost',
	PORT:process.env.PORT||8000,
	PRO_PORT:process.env.PRO_PORT||8001,
	DEV_ROOT_DIR:'/',
	PRD_ROOT_DIR:'/',
	START_DIST:'vue',//app,react
}