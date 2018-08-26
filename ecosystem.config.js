module.exports = {
  apps : [{
    name      : 'API',
    script    : 'bin/www',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key: '/c/Users/17981/.ssh/id_rsa.pub',
      host : 'github.com',
      user: 'git',
      ref  : 'origin/master',
      repo : 'git@github.com:Cinux-Chosan/express-vue.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
