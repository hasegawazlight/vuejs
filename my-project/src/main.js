import Vue from 'vue/dist/vue.esm'// $mount(#要素ID)以外で読む場合、vue/dist/vue.esmにするらしい。 → https://teratail.com/questions/107488
// import App from './App.vue'
import formApp from './form_app.vue'
import modal from './modal.vue'
import accordion from './accordion.vue'

// これを false に設定すると、 Vue の起動時のプロダクションのヒントが表示されなくなります。
Vue.config.productionTip = false

new Vue({
  el:'#app',
  data: {
    showModal: false,
    // message: 'Hello',
    // modalToggle: false, // true で表示。falseで非表示
  },
  components: {
    "form-app": formApp,
    "modal-app": modal,
    "accordion-app": accordion
  },
  methods: {
  }
});

require('@/assets/style/global.scss')