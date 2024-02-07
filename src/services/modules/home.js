import myRequest from ".."

export const getGoodPrice = () => {
  return myRequest.get({url: '/home/goodprice'})
}

export const getHighScore = () => {
  return myRequest.get({url: '/home/highscore'})
}

export const getPopularDest = () => {
  return myRequest.get({url: '/home/discount'})
}

export const getRecommendDest = () => {
  return myRequest.get({url: '/home/hotrecommenddest'})
}

export const getLongFor = () => {
  return myRequest.get({url: '/home/longfor'})
}
