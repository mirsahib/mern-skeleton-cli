const routerTemplate = `import express from 'express'
import {{item.controller}} from '../controllers/{{item.controllerPath}}'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/{{item.routesName}}')
  .get({{item.controller}}.list)
  .post({{item.controller}}.create)

router.route('/api/{{item.routesName}}/:{{item.routesId}}')
  .get(authCtrl.requireSignin, {{item.controller}}.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, {{item.controller}}.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, {{item.controller}}.remove)

router.param('{{item.routesId}}', {{item.controller}}.{{item.functionName}})

export default router`

exports.routerTemplate = routerTemplate