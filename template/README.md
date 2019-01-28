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

## Directory Structure
* **Api** : API Server 설정.(ExpressJS)
* **Assets** : Less, Sass, JS 등 컴파일 되지 않은 에셋들을 포함.(Webpack Loader 필요시.)
* **Components** : Vue.js Component 를 포함.
    + Pages : Page Component.
    + UI : UI Component.
* **Layouts** : App Layout 포함.
* **Middleware** : Page 나 Layout 이 렌더링되기 전에 실행할 사용자 정의 함수를 정의.
* **Pages** : 뷰와 Route 를 포함.
* **Plugins** : App 이 생성되기 전 실행하고 싶은 JS Plugin 을 포함.
* **Static** : 정적 파일 포함.
* **Store** : Vuex Store 파일을 포함.
    + 컴포넌트의 상태관리를 위해 사용한다.(ex. 전역 UI 상태처리 등.)
    + 전역 데이터 처리에 사용한다.(ex. accessToken, session 등.)
* **Service** : 공용 비즈니스 로직 (주의. NuxtJS, VueJS와 의존적이지 않게 작성한다.)
    + api : 백-엔드 API 비즈니스 로직 포함.
    + utils : 유틸성 비즈니스 로직 포함.(ex. HttpRequestService 등)
* **Models** : 데이터 모델.


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).