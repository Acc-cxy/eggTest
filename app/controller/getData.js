'use strict';

const Controller = require('egg').Controller;

class getDataController extends Controller {
  async getIndex() {
    const { ctx } = this;
    const query = ctx.request.query;
    if (query.type) {
      ctx.body = 'hi, egg' + query.type;
    } else {
      ctx.body = 'hi, egg';
    }
  }
}

module.exports = getDataController;
