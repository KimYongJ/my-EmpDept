const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
  app.use(
    '/emps',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  ),
    app.use(
      '/emp',
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    ),
    app.use(
      '/depts',
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
};
