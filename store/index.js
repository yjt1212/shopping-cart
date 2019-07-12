// 组装模块，并导出store，这是一个js文件
import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'

Vue.use( Vuex )

export default new Vuex.Store({
	modules: { cart }
})