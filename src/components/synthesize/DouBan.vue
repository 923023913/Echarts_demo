<template>
  <!-- 豆瓣电影最新上映电影排名分析-->
  <div
    class="main"
    ref="main"
  >

  </div>
</template>

<script>
// 引入 axios
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
    // option配置
    option () {
      return {
        // 标题
        title: {
          text: '北京最佳前10航行路线图',
          subtext: '数据自己模拟的，不要当真',
          left: 'center',
        },
        // 提示
        tooltip: {
          trigger: 'item'
        },
        // 图例
        legend: {
          orient: 'vertical',
          top: 'bottom',
          left: 'right',
          data: ['北京 Top10', '上海 Top10', '广州 Top10'],
          textStyle: {
            color: '#fff'
          },
          // 为了不让三个选项混合，单一模式
          selectedMode: 'single'
        },
        geo: {
          map: 'china',
          label: {
            show: false
          },
          roam: true,
          itemStyle: {
            areaColor: '#323c48',
            borderColor: '#404a59'
          },

          emphasis: {
            label: {
              show: true
            },
            itemStyle: {
              areaColor: '#2a333d'
            }
          }
        },
        // 图表系列
        series: this.series()
      }
    },
  },
  components: {
  },
  mounted () {
    this.myChart = this.$echarts.init(this.$refs.main)
    // this.myChart.setOption(this.option)
    axios.get('/api/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b').then(res=>{
      console.log(res)
    })
  },
  methods: {
  },
}
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  height: 800px;
  background-color: rgb(51, 51, 51);
}
</style>