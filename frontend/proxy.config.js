const proxy = [
    {
      context: '/api',
      target: 'http://localhost:3000',
      secure: false,
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;