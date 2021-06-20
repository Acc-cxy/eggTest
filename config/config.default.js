/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1623982121058_7845';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
  };

  config.view = {
    // 渲染模板HTML render函数渲染
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.cors = {
    origin: '*', // 跨任何域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 被允许的请求方式
  };

  config.jwt = {
    secret: 'funToken',
  };

  config.sequelize = {
    dialect : 'mysql',
    database: 'eggtest',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
  }

  return {
    ...config,
    ...userConfig,
  };
};
