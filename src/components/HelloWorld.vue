<template>
  <div class="hello">
    <div class="static" v-for="(item,index) in [0,1,2,3,4,5,6,7,8]" v-bind:style=howbig[index]></div>
    <input v-model="currNum" placeholder="0">
    <button v-on:click="numInput()">GO</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      distance: 540,
      picHight: '90px',
      picWidth: '67px',
      nextNum: [1, 1, 1, 1, 1, 1, 1, 1],
      prevNum: [3, 6, 8, 9, 0, 4, 3, 5],
      currNum: '',
      styleobjs: []
    }
  },
  methods: {
    numInput: function() {
      //this.prevNum = this.nextNum
      let temp = this.nextNum.slice()
      let currLen = this.currNum.length
      let nextLen = this.nextNum.length
      for (let i = 0; i < nextLen; i++) {
        this.nextNum[i] =
          nextLen - currLen > i
            ? 0
            : parseInt(this.currNum[i - (nextLen - currLen)])
      }
      this.prevNum = temp
    }
  },
  computed: {
    howbig: function() {
      {
        for (let i = 0; i < 8; i++) {
          let styleobj = {
            height: this.picHight,
            width: this.picWidth,
            background:
              'url(/static/img/digits.png)' +
              ' 0px ' +
              -this.prevNum[i] * this.distance +
              'px',
            animation:
              'num' +
              this.nextNum[i] +
              ' 0.5s steps(' +
              6 * Math.abs(this.nextNum[i] - this.prevNum[i]) +
              ') 1 forwards'
          }
          this.styleobjs[i] = styleobj
        }

        return this.styleobjs
      }
    }
  }
}
</script>


