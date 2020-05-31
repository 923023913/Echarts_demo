<template>
  <div class="theme">
    <!-- 主题切换 -->
    <h2>主题切换</h2>
    <div>
      <a
        href="javascript:;"
        @click="toggleTheme('vintage')"
      >vintage</a>
      <a
        href="avascript:;"
        @click="toggleTheme('purple-passion')"
      >purple-passion</a>
    </div>
    <div
      class="charts"
      ref="theme"
    ></div>
  </div>
</template>

<script>
// 默认主题在echarts依赖包下的theme里面，如果想要使用自定义主题的话
// 只需要把下载的js文件放入 echarts/theme 这个文件夹里，然后根据文件名，进行引入即可
import 'echarts/theme/vintage.js'
import 'echarts/theme/purple-passion.js'

export default {
  name: '',
  data () {
    return {
      // myTheme: null, // 为了切换主题，所以把图表实例放到这里
      option: {
        title: {
          text: '基本配置'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '内裤', '香烟']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 15, 40]
          }
        ]
      }
    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  mounted () {
    this.myTheme = this.$echarts.init(this.$refs.theme)
    this.myTheme.setOption(this.option)
  },
  methods: {
    // 点击切换主题
    toggleTheme (theme) {
      // 首先需要清除实例
      this.myTheme.dispose()
      // 设置主题，等二个参数是主题名字
      this.myTheme = this.$echarts.init(this.$refs.theme, theme)
      this.myTheme.setOption(this.option)
    }
  },
}
</script>

<style scoped lang='scss'>
.theme {
  .charts {
    width: 100%;
    height: 600px;
  }
}
</style>