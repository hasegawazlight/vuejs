<template>

    <div>
      <pre>
        {{ $data }}
      </pre>
      <!-- モーダル表示ボタン -->
      <button class="button is-primary is-large modal-button" data-target="modal-ter" aria-haspopup="true" v-on:click="modalclick">Launch modal</button>

      <!-- モーダルウインドウ -->
      <div v-if="modalToggle">
        <div class="modal is-active">
          <div class="modal-background" v-on:click="modalcloseclick"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Modal title</p>
              <button class="delete" aria-label="close" @click="modalcloseclick()"></button>
            </header>
            <!--
              モーダルウインドウ内のコンテンツは、componentディレクトリ内の単一ファイルコンポーネントを呼び出す
              Todo：画面によって、出し分けるにはどうすれば良いか考える。
            -->
            <modal-window></modal-window>
            <footer class="modal-card-foot">
              <button class="button is-success">Save changes</button>
              <button class="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

/**
 * 必要な単一ファイルコンポーネントをimportする。
 */
import modalContent from "./components/modal_content";
import modalContent2 from "./components/modal_content2";

let modalItem = modalContent

export default {
  name: 'modal',
  data: function () {
    // コンポーネントからのdataは、function() {return{}} で返す。
    return {
      // modalWindow: modalContent,
      modalToggle: false, // true で表示。falseで非表示
    }
  },
  props: {
    modalitem: {
      type: String
    }
  },
  created: function () {
    console.log("初期のmodalItemは")
    console.dir(modalItem)
    console.log("書き換える前は"+modalItem)
    modalItem = this.modalitem
    console.log("書き換え後は"+modalItem)
    return {
      modalItem
    }
  },

  // props: {
  //   modalitem: {function (value) {
  //       modalItem = value
  //       return
  //     }
  //   }
  // },
  // props: ['modalitem'],
  // computed: {
  //   modalSelect(){
  //     alert
  //        return modalItem = this.modalitem
      
  //   }
  // },
  // props: {
  //   modalitem: {
  //     type: String
  //   }
  // },
  components: {
    // "modal-window": function() {
    //   return this.modalitem
    // }
    "modal-window": modalItem,
    // "modal-btn": modalBtn,
  },
  methods: {
    modalclick: function() {
      console.log( this.modalitem);
      modalItem = this.modalitem
      this.modalToggle = true;
      // this.components["modal-window"] = this.modalitem
      // this.modalWindow = this.modalitem
    },
    modalcloseclick: function() {
      this.modalToggle = false;
    }
  }
}


</script>

<style>

</style>