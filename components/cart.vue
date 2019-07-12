<template>
  <div class="product">
  	<h3>已选商品</h3>
  	<table class="table table-hover table-bordered">
  		<thead>
  			<tr>
  				<th>id</th>
  				<th>名称</th>
  				<th>价格</th>
  				<th>数量</th>
  				<th>操作</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="n in cartProducts">
  				<td> {{ n.id }} </td>
  				<td> {{ n.name }} </td>
  				<td> {{ n.price }} </td>
  				<td> {{ n.num }} </td>
  				<td>
  					<div 
  					@click="delGoods(n)"
  					class="btn btn-danger btn-sm">删除</div>
  				</td>
  			</tr>
  		</tbody>
  	</table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
	name: 'cart',
	data(){
		return {}
	},
	computed: {
		// 映射数据
		...mapGetters([
			'cartProducts'
			])
	},
	methods: {
		...mapActions([
			'delGoods'
			])
	}
}
</script>
