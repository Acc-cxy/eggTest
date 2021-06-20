'use strict';

const Controller = require('egg').Controller;

class jwtToken extends Controller {
  async index() {
      const obj = {
        user: 'name',
      }
      const token = this.app.jwt.sign(obj,this.app.config.jwt.secret)
      // this.ctx.body = token;

      const decode = this.app.jwt.verify(token,this.app.config.jwt.secret)
      this.ctx.body = decode;
    }
}

module.exports = jwtToken;