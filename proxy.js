let cors_proxy = require('cors-anywhere');
let host = '0.0.0.0';
let port = 8081;
cors_proxy
.createServer({
    originWhitelist:[],//allow all origins
    requireHeader:['origin','x-requested-with'],
    removeHeaders:['cookie','cookie2']
})
.listen(port,host,()=>{
    console.log(`running cors proxy on host ${host} and port ${port}`);
})