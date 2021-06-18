'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  nunjucks: {
    // 渲染模板HTML render函数渲染
    enable: true,
    package: 'egg-view-nunjucks',
  },

  cors: {
    // 跨域
    enable: true,
    package: 'egg-cors',
  },
};
