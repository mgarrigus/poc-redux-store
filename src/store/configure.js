// Use CommonJS require below so we can dynamically import during build-time.
const isProd = (process.env.NODE_ENV === 'production');
module.exports = isProd ? require('./configure-prod') : require('./configure-dev');
