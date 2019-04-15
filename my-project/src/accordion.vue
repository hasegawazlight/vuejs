<template>

  <aside class="menu js-accordion" v-cloak>
    <!-- 参考 http://lab.astamuse.co.jp/entry/2018/10/15/154737 -->
    <p class="menu-label js-accordion--trigger" :class="{ '_state-open': isOpened }" @click="accordionToggle()">
      ACCORDION MENU
    </p>
    <ul class="menu-list js-accordion--target" :class="{ '_state-open': isOpened }" v-if="isOpened">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
  </aside>

</template>

<script>

/**
 * 必要な単一ファイルコンポーネントをimportする。
 */
// import modalContent from "./components/modal_content";
// import modalContent2 from "./components/modal_content2";


export default {
  name: 'accordion',
  data: function () {
    // コンポーネントからのdataは、function() {return{}} で返す。
    return {
      isOpened: false
    };
  },
  props: {
    // modalitem: {
    //   type: String
    // }
  },
  created: function () {

  },

  components: {
  },
  methods: {
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
  }
}


</script>

<style lang="scss" scoped>
  .menu {
    margin-top: 30px;
  }


.js-accordion{
  background-color: #fff;
  border-color: #666;
  border-style: solid;
  border-width:1px 1px 0 1px;
  border-radius: 2px;
  &:last-child{
    border-bottom-width:1px;
  }
  &--trigger{
    position: relative;
    display: block;
    width: 100%;
    transition: all 0.2s ease-in;
    color: #4d68b7;
    display: block;
    font-size:20px;
    font-weight: bold;
    text-align: left;
    padding: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    &:after{
      display: inline-block;
      width: 0;
      height: 0;
      border: solid transparent;
      content: "";
      border-top-color: #5f6569;
      border-width: 7px;
      position: absolute;
      top: 50%;
      right: 1em;
      margin-top: -5px;
      transition: all 0.2s ease-in;
    }
    &._state-open{
      background-color: #f1f1f1;
      text-decoration: none;
      &:after{
        transform:rotateX(180deg);
        margin-top: -10px;
      }
    }
    &:hover{
      background-color: #f1f1f1;
      text-decoration: none;
    }
  }
  &--target{
    overflow: hidden;
    transition: 0.4s ease-in-out;
  }
  &--body{
    
    padding: 30px;
  }
  &-enter-active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__opend;
  }
  &-leave-active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__closed;
  }
}

@keyframes js-accordion--anime__opend {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
   }
}
@keyframes js-accordion--anime__closed {
  0% {
   opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

</style>