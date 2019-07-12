const state = {
	// 所有商品
	shopList: [{
		id: 1,
		name: '朗逸',
		price: 100
	},{
		id: 2,
		name: '凌度',
		price: 200
	},{
		id: 3,
		name: '迈腾',
		price: 300
	},{
		id: 4,
		name: '帕萨特',
		price: 400
	},{
		id: 5,
		name: '辉腾',
		price: 500
	}],
	// 已选择商品的id和数量
	added: []
}

// 向外输出数据
const getters = {
	// 商品列表
	shopList: state => state.shopList,

	// 购物车列表
	cartProducts: state => {
		return state.added.map(({id, num}) => {
			let _n = state.shopList.find( n => n.id === id )
			return {
				..._n,
				num
			}
		})
	},

	// 计算总数
	totalNum: ( state, getters ) => {
		let _total = 0
		getters.cartProducts.forEach( n => {
			_total += n.num
		} )
		return _total
	},

	//计算总金额
	totalPrice: ( state, getters ) => {
		let _total = 0
		getters.cartProducts.forEach( n => {
			_total += n.num * n.price
		} )
		return _total
	}
}

const actions = {
	// 添加到购物车
	addToCart({commit}, n){
		// console.log( n )
		commit('add', {
			id: n.id
		})
	},

	// 删除商品
	delGoods({commit}, n){
		commit('delFn', n)
	},

	// 清空购物车
	clearAllGoods({commit}){
		commit('clearAll')
	}
}

const mutations = {
	add( state, {id} ){
		// console.log( id )
		let _n = state.added.find( n => n.id == id )

		// 判断已选商品中，该商品是否存在
		if( _n ){
			// 商品已存在
			_n.num++
		} else {
			// 商品不存在
			state.added.push({
				id,
				num: 1
			})
		}
	},

	// 删除商品
	delFn( state, _goods ){
		state.added.forEach((n, i) => {
			if(n.id == _goods.id){
				state.added.splice( i, 1 )
			}
		})
	},

	// 清空购物车
	clearAll(state){
		state.added = []
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}
