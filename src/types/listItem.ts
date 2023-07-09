interface Item {
  id: number
  name: string
  tagLine: string
  abv: number
  attenuation_level: number
  boil_volume: {
    unit: string
    value: number
  }
  brewers_tips: string
  contributed_by: string
  description: string
  ebc: number
  first_brewed: string
  food_pairing: Array<string>
  ibu: number
  image_url: string
  ingredients: {
    hops: Array<{
      name: string
      add: string
      attribute: string
      amount: { unit: string; value: number }
    }>
    malt: Array<{
      name: string
      amount: { unit: string; value: number }
    }>
    yeast: string
  }
  method: {
    fermentation: {
      temp: {
        unit: string
        value: string
      }
    }
    mash_temp: Array<{
      temp: {
        value: number
        unit: string
      }
      duration: number
      twist: any
    }>
  }
  ph: number
  srm: number
  tagline: string
  target_fg: number
  target_og: number
  volume: {
    unit: string
    value: number
  }
}

interface ItemProp {
  item: Item
}

export default ItemProp
