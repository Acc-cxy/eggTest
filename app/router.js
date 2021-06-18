'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/html', controller.home.html);
  router.get('/admin', controller.admin.echo);
  router.get('/getData/getIndex', controller.getData.getIndex);
  router.resources('fruits', '/fruits', controller.fruits);
};
