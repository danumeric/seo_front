export interface IStatisticSubject {
  id: number
  name: string
  data: StatisticValue[]
}
export type StatisticValue = [number, number]
