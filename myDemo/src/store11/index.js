// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import state from './state'
// import mutations from './mutations'
// import createLogger from 'vuex/dist/logger'

// Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'
// export default new Vuex.Store({
// 	actions,
// 	getters,
// 	state,
// 	mutations,
// 	strict: debug,
// 	plugins: debug ? [createLogger()] : []
// })
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex)
export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions
})

