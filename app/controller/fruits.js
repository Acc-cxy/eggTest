'use strict';

const Controller = require('egg').Controller;

const fruitsList = [ '苹果', '梨子', '香蕉' ];
class fruits extends Controller {
  // get请求
  async index() {
    const { ctx } = this;
    ctx.body = fruitsList;
  }

  // post请求
  async create() {
    const { ctx } = this;
    const fruit = ctx.request.body.fruit;
    if (!fruit) {
      ctx.body = '不能为空';
    } else {
      fruitsList.push(fruit);
      ctx.body = '添加成功';
    }

  }

  // delete请求
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    fruitsList.splice(id, 1);
    ctx.body = '删除成功';
  }
}

module.exports = fruits;
