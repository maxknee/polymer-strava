'use strict';

var cred = {
	host: 'strava.com',
	clientId: 239,
	redirectUrl: 'http://localhost',
	responseType: 'code'
};

export function Oauth() {
	return console.log(cred);
}