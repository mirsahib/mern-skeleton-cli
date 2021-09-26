const controllerTemplate = `import {{item.name}} from '../models/{{item.modelName}}.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
  const {{item.nameToLower}} = new {{item.name}}(req.body)
  try {
    await {{item.nameToLower}}.save()
    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

/**
 * Load {{item.nameToLower}} and append to req.
 */
const {{item.functionName}} = async (req, res, next, id) => {
  try {
    let {{item.nameToLower}} = await {{item.name}}.findById(id)
    if (!{{item.nameToLower}})
      return res.status('400').json({
        error: "{{item.nameToLower}} not found"
      })
    req.profile = {{item.nameToLower}}
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve {{item.nameToLower}}"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let {{item.namePlural}} = await {{item.name}}.find()
    res.json({{item.namePlural}})
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let {{item.nameToLower}} = req.profile
    {{item.nameToLower}} = extend({{item.nameToLower}}, req.body)
    {{item.nameToLower}}.updated = Date.now()
    await {{item.nameToLower}}.save()
    {{item.nameToLower}}.hashed_password = undefined
    {{item.nameToLower}}.salt = undefined
    res.json({{item.nameToLower}})
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let {{item.nameToLower}} = req.profile
    let {{item.deletedName}} = await {{item.nameToLower}}.remove()
    {{item.deletedName}}.hashed_password = undefined
    {{item.deletedName}}.salt = undefined
    res.json({{item.deletedName}})
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default {
  create,
  {{item.functionName}},
  read,
  list,
  remove,
  update
}`

exports.controllerTemplate = controllerTemplate