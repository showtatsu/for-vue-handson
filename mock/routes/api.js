const jsonServer = require('json-server')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

router.use(middlewares)
router.use(router)

module.exports = router;
