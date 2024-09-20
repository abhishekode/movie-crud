module.exports = {
  apps: [
    {
      name: 'movie-api',
      script: 'dist/main.js',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
