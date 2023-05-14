<template>
  <HeaderMain />
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col cols="12" md="6"> <TableStatistics /></v-col>
      <v-col cols="12" md="6"> <ChartStatistics /></v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import HeaderMain from '@/components/HeaderMain/HeaderMain.vue'
import ChartStatistics from '@/components/ChartStatistics/ChartStatistics.vue'
import TableStatistics from '@/components/TableStatistics/TableStatistics.vue'
</script>
