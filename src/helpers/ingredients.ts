/* eslint-disable @typescript-eslint/no-explicit-any */
const getIngredients = (incredirents: any) => {
  const incredients = Object.keys(incredirents)
    .map((key) => key)
    .join(',')

  return incredients
}

export default getIngredients
