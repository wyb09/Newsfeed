import Router from 'koa-router'
import requireDir from 'require-dir'
import rss from '../lib/rss'
import parse from 'co-body'

const controllers = requireDir('./controllers')

export default() => {
  const router = new Router()

  router.post('/add', function* (next) {
    let body = yield parse(this)

    let res = yield rss(body.url, 2000)

    this.body = 'subscription created.'

  })

  return router
}
