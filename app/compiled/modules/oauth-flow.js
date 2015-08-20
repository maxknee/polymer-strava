'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.Oauth = Oauth;
var cred = {
	host: 'strava.com',
	clientId: 239,
	redirectUrl: 'http://localhost',
	responseType: 'code'
};

function Oauth() {
	return console.log(cred);
}