// Router here
const router = require('express').Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)

// router
//  .route('/name')
//  .get(controller.getName)

module.exports = router;