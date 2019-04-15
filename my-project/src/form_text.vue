<template>

<div class="field">
  <label class="label">text</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

</template>

<script>
export default {
  name: "formText",
  data: function () {
      return {
          form_text: 0
      }
  },
  components: {
    // "modal-window": modal,
    // "modal-btn": modalBtn,
  },
  methods: {
    // modalclick: function() {
    //   this.modalToggle = true;
    // },
    // modalcloseclick: function() {
    //   this.modalToggle = false;
    // }
  }
}

</script>

<style>

</style>