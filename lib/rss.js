import RSS from 'rss-feed-emitter'
const feeder = new RSS()

export default function* (url , refresh){

  return new Promise(function(resolve, reject) {
    feeder.add({
      url: url,
      refresh: refresh
    })

    resolve(feeder)
  })

}
