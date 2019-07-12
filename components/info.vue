<template>
  <div class="item-wrapper">
  	<div class="item">
      总数： {{ totalNum }}
    </div>
    <div class="item">
      总金额： {{ totalPrice }}
    </div>
    <div 
    @click="clearAllGoods"
    class="item btn btn-danger">
      清空购物车
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
	name: 'info',
	data(){
		return {}
	},
  computed: {
    // 映射数据
    ...mapGetters([
      'totalNum',
      'totalPrice'
      ])
  },
  methods: {
    // 映射事件,把事件映射到 store 的 actions 里面
    ...mapActions([
      'clearAllGoods'
      ])
  }
}
</script>

<style scoped>
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