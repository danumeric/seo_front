<template>
  <Chart v-if="isShowChart" :options="chartOptions"></Chart>
</template>

<script setup lang="ts">
import { Chart } from 'highcharts-vue'
import { StatisticValue } from '@/models/statistics.model'
import { reactive, ref, watch, nextTick } from 'vue'
import { useStatisticsData } from '@/store/statisticsData'
const statisticsDataStore = useStatisticsData()

let isShowChart = ref(true)
let chartData = reactive([])

watch(
  () => statisticsDataStore.statisticsData,
  () => {
    isShowChart.value = false
    chartOptions.series = []
    for (let i = 0; i < statisticsDataStore.statisticsData.length; i++) {
      chartOptions.series.push({ name: '', data: [] })
      chartOptions.series[i].data = statisticsDataStore.statisticsData[i]?.data
      chartOptions.series[i].name = statisticsDataStore.statisticsData[i]?.name
    }

    nextTick(() => {
      isShowChart.value = true
    })
  },
  { deep: true }
)

let chartOptions = {
  type: 'line',
  title: {
    text: 'График изменения топа',
    x: -20,
  },
  xAxis: {
    title: { text: 'Дата' },
    showFirstLabel: true,
    showLastLabel: true,
    type: 'datetime',
    startOnTick: true,
  },
  yAxis: {
    title: { text: '%' },
    showFirstLabel: true,
    showLastLabel: true,
    min: 0,
    max: 100,
    tickInterval: 10,
    startOnTick: true,
    endOnTick: true,
  },
  series: [
    {
      data: chartData as StatisticValue[],
      name: '' as string,
    },
  ],
}
</script>

<style lang="scss" scoped></style>
