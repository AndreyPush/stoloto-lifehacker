<template>
  <section id="app">
    <header-component ref="header" :fillStep="headerFilled" />
    <preview ref="preview"/>
    <main class="main">
      <navigation/>
      <article-component />
    </main>
    <footer-component />
  </section>
</template>

<script>
  import headerComponent from '@cmp/layout/header-component'
  import preview from '@cmp/Preview/Preview'
  import navigation from '@cmp/layout/navigation'
  import articleComponent from '@cmp/Article/ArticleComponent'
  import footerComponent from '@cmp/layout/footer-component'

  export default {
    name: 'Index',
    components: {
      headerComponent,
      preview,
      navigation,
      articleComponent,
      footerComponent
    },
    data: ()=>({
      headerFilled: 0,
    }),
    methods: {
      fillHeader(y){

        let vm = this;

        let endPoint = vm.$refs.preview.$el.clientHeight;
        let beginPoint = endPoint - vm.$refs.header.$el.clientHeight*2;
        let coeff = (y-beginPoint)/endPoint*10;
        coeff = y<=beginPoint?0:coeff;

        if(y>=beginPoint){
          vm.headerFilled = coeff<=1?coeff:1;
        }
        else{
          vm.headerFilled = coeff;
        }

      },

    },
    mounted(){
      let vm = this;

      window.addEventListener('scroll', ()=>{
        vm.fillHeader(window.scrollY)
      })
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main";
  @import "./assets/scss/libs";
</style>
