<template>
  <div :class="wrapClasses">
    <input type="text" :class="inputClasses" :value="value">
  </div>
</template>
<script>
  const prefixCls = 'HUI-input';
  export default{
    name: 'h-input',
    props: {
      type : {
        type : String,
        default : 'text'
      },
      //v-model传过来的
      value : {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
      }
    },
    computed : {
      wrapClasses () {
        return `${prefixCls}-wrapper`
      },
      inputClasses() {
        return `${prefixCls}`
      }
    },
    watch : {
      value (val) {
        console.log(val);
      }
    }
  }
</script>
