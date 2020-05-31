<template>
  <div class="async">
    <!-- 异步加载数据,动态更新 -->
    <div
      class="charts"
      ref="yibu"
    ></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  mounted () {
    this.myChart = this.$echarts.init(this.$refs.yibu)
    // 为了让用户有更好的体验，所以我们先初始化option配置
    this.myChart.setOption(this.option())
    // 显示loading动画 表示正在加载中
    this.myChart.showLoading()
    // 三秒后进行显示
    this.asyncData()
  },
  methods: {
    // option初始化配置 ,把data设置为空数组
    option () {
      return {
        title: {
          text: '我是异步加载的数据，刷新试下',
          subtext: '我是本地json定义的数据',
          left: 'center',
          textStyle: {
            fontSize: 30,
          }
        },
        tooltip: {},
        // legend: {
        //   data: ['销量']
        // },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: []
          }
        ]
      }
    },
    // 异步请求数据
    asyncData () {
      // 异步加载数据 模拟3秒时间
      setTimeout(() => {
        // 异步请求数据 加载数据
        axios.get('/static/data/yibu.json').then((res) => {
          // 数据3秒后请求成功，隐藏loading动画
          this.myChart.hideLoading()
          this.myChart.setOption({
            xAxis: {
              data: res.data.catogories
            },
            series: [{
              data: res.data.data
            }]
          })
        })
      }, 3000);
    }
  },
}
</script>

<style scoped lang='scss'>
.async {
  margin-top: 20px;
}
.charts {
  width: 100%;
  height: 600px;
}
</style>