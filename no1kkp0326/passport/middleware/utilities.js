var config = require('../config');

module.exports.csrf = function csrf(req, res, next){
	res.locals.token = req.csrfToken();
	next();
};

module.exports.authenticated = function authenticated(req, res, next){
	req.session.isAuthenticated = req.session.passport.user !== undefined;  //패스포트 인증 미들웨어 인식!!
	res.locals.isAuthenticated = req.session.isAuthenticated;
	if (req.session.isAuthenticated) {
		res.locals.user = req.session.passport.user;
	}
	next();
};

module.exports.requireAuthentication = function requireAuthentication(req, res, next){
	if (req.session.isAuthenticated) {
		next();
	}else {
		res.redirect(config.routes.login);
	}
};

module.exports.auth = function auth(username, password, session){
	var isAuth = username === 'joshua' || username === 'brian';
	if (isAuth) {
		session.isAuthenticated = isAuth;
		session.user = {username: username};
	}

	return isAuth;
};

module.exports.logOut = function logOut(req){
	req.session.isAuthenticated = false;
	req.logout();   //패스포트 세션 사용자 삭제처리
};

module.exports.templateRoutes = function templateRoutes(req, res, next){
	res.locals.routes = config.routes;

	next();
};
