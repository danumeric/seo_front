<template>
  <v-table density="compact" class="table-statistics">
    <thead>
      <tr>
        <th class="text-left">Дата</th>
        <th
          v-for="(col, id) in statisticsDataStore.statisticsData"
          :key="`${col.name}_${id}`"
          class="text-left"
        >
          {{ statisticsDataStore.statisticsData[id]?.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(statisticsValue, row) in statisticsDataStore.statisticsData[0]?.data"
        :key="statisticsValue[0].data"
      >
        <td>{{ tsDateToString(statisticsValue[0]) }}</td>
        <td v-for="(col, id) in statisticsDataStore.statisticsData" :key="`${col.data[0]}_${id}`">
          {{ col.data[row][1] }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { useStatisticsData } from '@/store/statisticsData'
const statisticsDataStore = useStatisticsData()
statisticsDataStore.fetchStatistics()

function tsDateToString(ts: number): string {
  let date = new Date(ts)
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  return [(dd > 9 ? '' : '0') + dd, (mm > 9 ? '' : '0') + mm, date.getFullYear()].join('.')
}
</script>

<style lang="scss" scoped>
.table-statistics {
  max-width: 550px;
}
</style>
