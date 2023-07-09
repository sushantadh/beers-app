/* eslint-disable @typescript-eslint/no-explicit-any */
const getIngredients = (incredirents: any) => {
  if (incredirents) {
    return Object.keys(incredirents)
      .map((key) => key)
      .join(',')
  }

  return null
}

export default getIngredients
