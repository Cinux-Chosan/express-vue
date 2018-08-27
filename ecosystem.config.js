module.exports = {
  apps: [
    {
      name: "post",
      script: "bin/www",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      host: "chosan.cn",
      user: "root",
      ref: "origin/master",
      ssh_options: "StrictHostKeyChecking=no",
      repo: "git@github.com:Cinux-Chosan/express-vue.git",
      path: "/zhangjianjun",
      "post-setup": "npm i",
      "post-deploy":
        "yarn && cd app-ember && yarn && ember b --prod && cd .. && node upload-statics.js && pm2 reload ecosystem.config.js --env production"
    }
  }
};
