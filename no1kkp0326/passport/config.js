var config = {
	port: 3000,
	secret: 'secret',
	redisPort: 6379,
	redisHost: 'localhost',
	routes: {
		login: '/account/login',
		logout: '/account/logout',
		register: '/account/register',
		chat: '/chat',
		facebookAuth: '/auth/facebook',
		facebookAuthCallback: '/auth/facebook/callback',
		googleAuth: '/auth/google',
		googleAuthCallback: '/auth/google/callback'
	},
	host: 'http://localhost:3000',
	facebook: {
		appID: 'YOUR_ID',
		appSecret: 'YOUR_SECRET'
	},
	google: {
		clientID: 'YOUR_ID',
		clientSecret: 'YOUR_SECRET'
	},
    //암호설정
	crypto: {
		workFactor: 5000,
		keylen: 32,
		randomSize: 256
	}
};

module.exports = config;
