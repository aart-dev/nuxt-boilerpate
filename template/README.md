# aart-nuxt-boilerplate

> Nuxt project boilerplate for quick start

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

## Git CLI
``` bash
# git push
$ git add *
$ git commit -m "Commit Message"
$ git push -u origin master
```

## PM2
[PM2 Document](https://pm2.io/doc/)
``` bash
$ pm2 start ecosystem.config.js
$ pm2 stop <app_name|id>

$ pm2 list
$ pm2 show <app_name|id>
$ pm2 delete <app_name|id>
$ pm2 logs <app_name|id>
$ pm2 show monit
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).