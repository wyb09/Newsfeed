import koa from 'koa'
import routes from './routes'

const app = koa()
const router = routes()

app.use(function* (next) {
  try {
    yield next
  } catch (err) {
    console.error(err.stack)

    this.status = err.status || 500
    this.body = {
      status: err.code || 500,
      message: err.message
    }
  }
})

app.use(router.routes())

export default app
