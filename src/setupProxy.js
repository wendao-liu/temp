const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/users', { target: 'http://test.webpcb.cn:3000' }));
}
