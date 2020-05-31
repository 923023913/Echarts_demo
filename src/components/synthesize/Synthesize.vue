<template>
  <div class="page">
    <!-- 北上广最佳前10航行路线图 -->
    <Synthesize1></Synthesize1>
  <!-- 豆瓣电影最新上映电影排名分析-->
    <DouBan></DouBan>
  </div>
</template>

<script>
import Synthesize1 from './Synthesize1'
import DouBan from './DouBan'
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
    Synthesize1,DouBan
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style scoped lang='scss'>
.page {
  width: 100%;
  height: 100%;
}
</style>