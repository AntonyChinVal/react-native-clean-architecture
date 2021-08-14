const URL_BASE = __DEV__ ? 'http://demo4566296.mockable.io' : 'http://demo4566296.mockable.io';

//Auth
const URL_AUTH = `${URL_BASE}/authentication`;
const URL_AUTH_AUTHENTICATE = `${URL_AUTH}/authenticate`;

//uSER
const URL_USER= `${URL_BASE}/user`;
const URL_USER_GET = `${URL_USER}/get`;

export default {
    URL_AUTH_AUTHENTICATE,
    URL_USER_GET
}