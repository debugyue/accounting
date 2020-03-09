const express=require('express');
const bodyParser=require('body-parser');
const categoryRouter=require('./routes/category.js');
const subjectRouter=require('./routes/subject.js');
const app=express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.use(express.static('html'));
app.listen(8080);
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/cate',categoryRouter);
app.use('/sub',subjectRouter);