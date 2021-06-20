function checkToken(){
    return async function(ctx,next) {
        try {
            //获取token
            const token = ctx.request.header.token;
            // 校验token
            const decode = ctx.app.jwt.verify(token,ctx.app.config.jwt.secret)
            if(decode){
                await next();
            }else {
                ctx.body = {
                    code:500,
                    msg:'用户校验失败'
                }
            }
        }catch (e) {
            ctx.body = {
                code:500,
                msg:'token校验失败'
            }
        }
    }
}

module.exports = checkToken;