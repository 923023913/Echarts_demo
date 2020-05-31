<template>
  <div class="events">
    <!--事件与行为-->
    <div
      class="charts"
      ref="events"
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
    // 初始化实例
    this.myChart = this.$echarts.init(this.$refs.events)
    // 为了让用户有更好的体验，所以我们先初始化option配置
    this.myChart.setOption(this.option())
    // 显示loading动画 表示正在加载中
    this.myChart.showLoading()
    // 三秒后数据加载完成，隐藏loading动画
    this.asyncData()
    // 点击事件
    this.myChart.on('click', (params) => {
      if (params.name == '男士内裤') {
        this.myChart.setOption({
          legend: {
            data: ['更新'],
            left: 10,
            orient: 'vertical'
          },
          xAxis: {
            data: ['我更新了数据', '我更新了数据1', '我更新了数据2']
          },
          series: [
            {
              name: '更新',
              type: 'line',
              data: [15, 23, 46]
            }
          ]
        })
      }
    })
    // 点击图例事件
    this.myChart.on('legendselectchanged',(params)=>{
      let isSelected = params.selected[params.name]
      if (isSelected) {
        alert('选中了'+params.name)
      }else {
        alert('取消选中了'+params.name)
      }
    })
  },
  methods: {
    // option初始化配置 ,把data设置为空数组
    option () {
      return {
        title: {
          text: 'Echarts事件行为 点击男士内裤试试',
          subtext: '我是本地json定义的数据',
          left: 'center',
          textStyle: {
            fontSize: 30,
          }
        },
        tooltip: {},
        legend: {
          data: ['销量'],
          left: 10,
          orient: 'vertical'
        },
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
.events {
  margin-top: 20px;
}
.charts {
  width: 100%;
  height: 600px;
}
</style>