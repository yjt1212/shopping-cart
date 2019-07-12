<template>
  <div class="product">
  	<h3>商品信息</h3>
  	<table class="table table-hover table-bordered">
  		<thead>
  			<tr>
  				<th>id</th>
  				<th>名称</th>
  				<th>价格</th>
  				<th>操作</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="n in shopList">
  				<td> {{ n.id }} </td>
  				<td> {{ n.name }} </td>
  				<td> {{ n.price }} </td>
  				<td>
  					<div 
  					@click="addToCart(n)"
  					class="btn btn-info">添加到购物车</div>
  				</td>
  			</tr>
  		</tbody>
  	</table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
	name: 'product',
	data(){
		return {}
	},
	computed: {
		// 映射数据
		...mapGetters([
			'shopList'
			])
	},
	methods: {
		...mapActions([
			'addToCart'
			])
	}
}
</script>

<style scoped>
	.table-shop>th{
		text-align: center;
	}
	.item-wrapper{
		display: flex;
		background-color: #dfdfdf;
		align-items: center;
		justify-content: center;
	}
	.item{
		flex: 1;
	}
</style>
