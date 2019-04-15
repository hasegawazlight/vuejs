<template>

    
    <div>
      <pre>
      <!-- {{ $data }} -->
      </pre>

      <!-- ▼ form ▼ -->
      <h2 class="is-size-3">form</h2>
      <form>
        <formText></formText>
        <formTextarea></formTextarea>
        <form-select></form-select>
        <form-checkbox></form-checkbox>
        <form-radio></form-radio>
        <form-file></form-file>
        <form-hidden></form-hidden>
      </form>
      <!-- ▲ form ▲ -->
    </div>

</template>

<script>

/**
 * 必要な単一ファイルコンポーネントをimportする。
 */
import formText from "./components/form_text";
import formTextarea from "./components/form_textarea";
import formSelect from "./components/form_select";
import formCheckbox from "./components/form_checkbox";
import formRadio from "./components/form_radio";
import formFile from "./components/form_file";
import formHidden from "./components/form_hidden";

export default {
  name: 'formApp',
  components: {
    formText,
    formTextarea,
    formSelect,
    formCheckbox,
    formRadio,
    formFile,
    formHidden
  }
}


</script>

<style>

</style>