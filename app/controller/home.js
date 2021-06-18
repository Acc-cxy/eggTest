'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async html() {
    const { ctx } = this;
    await ctx.render('index');
    // ctx.body = 'hi, egg新页面';
  }
}

module.exports = HomeController;
