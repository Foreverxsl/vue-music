<template>
  <div class="recommend" ref="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="(item, index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from '../../components/slider/slider'
export default {
  data() {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        console.log(res);
        if(res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(res.data.slider)
        }
      })
    }
  },
  components: {
    Slider
  },

}

</script>
<style>
</style>