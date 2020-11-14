const {createProxyMiddleware} =require("http-proxy-middleware");


module.exports = function(app) {

    app.use (
        "/api"
        ,createProxyMiddleware({
            target : "http://book.interpark.com",
            changeOrigin : true
    }));

    app.use (
        "/book"
        ,createProxyMiddleware({
            target : "http://15.164.166.47:3001",
            changeOrigin : true
    }))
}