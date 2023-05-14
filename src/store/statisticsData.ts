import { IStatisticSubject } from '@/models/statistics.model'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useStatisticsData = defineStore({
  id: 'statisticsData',
  state: () => {
    return {
      statisticsData: [] as IStatisticSubject[],
    }
  },

  actions: {
    async fetchStatistics() {
      try {
        const res = await axios.get('/test_task_mock.json')
        console.log(res.data)
        if (res.data.has_data) {
          this.statisticsData = res.data.data
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
})
