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
    prod: {
      host: "chosan.cn",
      user: "root",
      ref: "origin/master",
      ssh_options: "StrictHostKeyChecking=no",
      repo: "git@github.com:Cinux-Chosan/express-vue.git",
      path: "/zhangjianjun",
      "post-setup": "npm i && pm2 start ecosystem.config.js --env production",
      "pre-deploy-local": `\
        git add . && \
        git commit -m preDeployLocalHook && \
        git pull && \
        git push \
        `,
      "pre-deploy": `\
        git add . && \
        git commit -am preDeployHook && \
        git pull --rebase \
        `,
      "post-deploy": `\
        cd app-ember && \
        npm i && \
        ember b --prod && \
        cd .. && \
        npm i && \
        node upload-statics.js && \
        pm2 reload ecosystem.config.js --env production \
        `
    }
  }
};
