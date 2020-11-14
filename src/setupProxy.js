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
            target : "http://localhost:3001",
            changeOrigin : true
    }))
}