const express=require('express');
const modle=require('../pool.js');
const router = express.Router();
router.get('/list/:id',(req,res)=>{
    let id=req.params.id;
    let sql='select * from category where parent=? and isopen=1 order by sort,id';
    if(id==0)
     sql="select * from category where isopen=1 and (parent is null or parent ='' or parent=0) order by sort,id";
    console.log(sql);
	modle.pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
router.get('/info/:id',(req,res)=>{
    let id=req.params.id;
    let sql='select * from category where id=? and isopen=1 order by sort,id';
    modle.pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
module.exports=router;