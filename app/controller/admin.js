'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async echo() {
    const { ctx } = this;
    const query = ctx.request.query;
    ctx.body = 'hi, egg' + query.index;
  }
}

module.exports = AdminController;
