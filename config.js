const config = {
  app: {
    port: 3000
  },
  version: 'v1',
  jwtSecret: 'PleaseGiveMeTheJob',
  jwtDuration: '2 hours',
  hashSalt: 10
};

module.exports = config;
