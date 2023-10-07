const CATIMG_URL = 'https://cataas.com/cat/says/'
const CATFACT_URL = 'https://catfact.ninja/fact'

// * Fetching Cat facts
export const fetchCatFact = async () => {
  return fetch(CATFACT_URL).then(res => {
    if (!res.ok) {
      throw new Error('We had some issues fetching the fact API')
    }
    return res.json()
  })
    .then((data) => {
      const newCatFact = data.fact
      return newCatFact
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}

//* Fetching Cat images
export const fetchCatImg = async ({ newCatImgText }) => {
  return fetch(`${CATIMG_URL}${newCatImgText}?json=true`).then(res => {
    if (!res.ok) {
      throw new Error('We had some issues fetching the random image API')
    }
    return res.json()
  })
    .then((data) => {
      const newCatImg = 'https://cataas.com' + data.url
      return newCatImg
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
