import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import {Auth0Plugin} from './auth'

// Install the authentication plugin
Vue.use(Auth0Plugin, {
	domain: 'apollo-example.auth0.com',
	clientId: '9zVhwu7kAY1HtTCTbJY5LJHZRrTvKnwZ',
	onRedirectCallback: appState => {
		router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
	},
})

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
