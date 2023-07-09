interface BeerData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>
  page: number
  loading: boolean
  error: string | null
}

export default BeerData
