<template>
  <div class="home">
    <div class="main">
      <!-- 混搭折线与柱状图+双轴 -->
      <h2>混搭折线与柱状图+双轴</h2>
      <div
        class="charts"
        ref="barLine"
      ></div>
      <!-- 多图表联动 -->
      <h2>多图表联动</h2>
      <div class="charts pie">
        <div ref="bieBar"></div>
        <div ref="bieBar1"></div>
      </div>
      <!-- 主题切换图表 -->
      <Theme></Theme>
      <!-- 异步加载数据 -->
      <Yibu></Yibu>
      <!-- Echarts点击与行为 -->
      <Event></Event>
    </div>
  </div>
</template>

<script>
// 引入主题组件
import Theme from './children/Theme'
// 引入 异步加载数据示例
import Yibu from './children/Yibu'
// 移入 事件案例
import Event from './children/Event'


export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Theme,Yibu,Event
  },
  mounted () {
    this.barLine()
    this.bieBar()
  },
  methods: {
    // 混搭折线与柱状图+双轴
    barLine () {
      let myChart = this.$echarts.init(this.$refs.barLine)
      let option = {
        // 图表提示框
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        // 工具箱
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        // 图例
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        // x轴配置
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        // y轴配置
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        // 系列
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      };
      myChart.setOption(option)
    },
    // 多图表联动
    bieBar () {
      // 饼图
      let myChart = this.$echarts.init(this.$refs.bieBar)
      let option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}次 ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: true },
            restore: {},
            saveAsImage: {},
          },
          right: 20
        },
        legend: {
          orient: 'vertical',
          left: 20,
          top: 'center',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);

      // 堆叠柱状图
      let myChart1 = this.$echarts.init(this.$refs.bieBar1)
      let option1 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [
                [{ type: 'min' }, { type: 'max' }]
              ]
            }
          }
        ]
      };
      myChart1.setOption(option1);

      // 将两个图表关联起来
      this.$echarts.connect([myChart, myChart1])
      // 让图表随着浏览器窗口的大小变化而变化
      setTimeout(() => {
        window.onresize = () => {
          myChart.resize()
          myChart1.resize()
        }
      }, 200)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  & > .main {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    border-top: 1px solid #ddd;
    .charts {
      width: 100%;
      height: 600px;
    }
    .pie {
      display: flex;
      & > div {
        flex: 1;
      }
    }
    h2 {
      margin: 20px 0;
    }
  }
}
</style>
