<template>
  <div :class="['app-header',currentTheme]">
    <!--主题切换-->
    <Modal title="切换主题" v-model="switchModal" @on-cancel="switchCancel" @on-ok="switchOk" :mask-closable='false'>
			<div class="switch-theme" @click="selectTheme">
				<span v-for="(item,index) in themes" :data-index="item.key" :class="[item.key,isActive==item.key?'active':'']"></span>
			</div>
    </Modal>
    <div v-show="!switchModal">Hello World</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchModal: false,
        themes:[{
        	key:'blue'
        },{
        	key:'green'
        }],
        currentTheme:sessionStorageGet('currentTheme')||'blue',
        isActive:'',
      }
    },
    methods: {
      /*start theme switch*/
      switchTheme(){
      	this.switchModal = true
        this.isActive = this.currentTheme
      },
      switchOk(){
      	this.switchModal = false
        this.currentTheme = this.isActive
        sessionStorageSet('currentTheme',this.currentTheme)
      },
      switchCancel(){
      	this.switchModal = false
      },
      selectTheme(e){
      	if(e.target.tagName==='SPAN'){
      		const index = e.target.dataset.index
      		this.isActive = index
      	}
      },
      /*end theme switch*/
    },
    mounted() {

    },
  }
</script>
<style lang="scss">
  .app-header {
    width: 100%;
    height: 0.48rem;
    line-height: 0.45rem;
    background: #0064b1;
    color: #ffffff;
    &.blue{
      background: #0064b1;
      color: #ffffff;
      &+div{
        .nav,.tree-header{
          background: #044a8b;
        }
      }
    }
    &.green{
      background: #00843e;
      color: #ffffff;
      &+div{
        .nav,.tree-header{
          background: #047238;
        }
      }
    }
    // 主题切换
    .switch-theme{
      padding: 20px 0;
      text-align: center;
      >span{
        display: inline-block;
        width: 50px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 10px;
        &.blue{
          background-color: #0064b1;
        }
        &.green{
          background-color: #00843e;
        }
        &.active{
          border:1px solid #eee;
          box-shadow: 0 0 2px 3px #bbb;
        }
      }
    }
  }
</style>
