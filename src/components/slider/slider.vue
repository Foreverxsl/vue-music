<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :key="index" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from '../../common/js/dom'
  export default {
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    mounted () {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots() // 就那个小点,因为是自动轮播，BScroll会自动在前后加一个sliderGroup，为了保持数量一直，要在BScroll之前初始化
        this._initSlider()
      }, 20)
    },
    methods: {
      _setSliderWidth() {
        this.children = this.$refs.sliderGroup.children
        console.log(this.$refs.slider.clientWidth);
        let width = 0
        // 轮播图宽度是一屏，slider的宽度=所有轮播图宽度之和
        let sliderWidth = this.$refs.slider.clientWidth
        // ※※※计算整个轮播的视口应该有多宽※※※
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          // 轮播组件设置样式，让img自适应宽度
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        // 因为bscroll为了无缝切换轮播，会前后克隆一个child，所以我们算宽度要加两个，如果是窗口改变，那么不增加，之前已经加过了
        if (this.loop) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true, // 横向滚动
          scrollY: false, // 不允许纵向滚动
          momentum: false, // 当快速滑动时是否开启滑动惯性
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400,
          click: true
        })
      },
      _initDots() {
        this.dots = new Array(this.children.length) // 一个长度为5的空数组
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>