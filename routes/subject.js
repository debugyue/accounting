const express=require('express');
const model=require('../pool.js');
const router = express.Router();
router.get('/list/:cateid/:parentid',async (req,res)=>{
    let cateid=req.params.cateid;    
	let parentid=req.params.parentid;
	let parentcateids=[cateid];
	let cateids=[];
	 var sql="select * from subject where isopen=1";
	 if(cateid==0)
		sql+=' and (category is null or category ="" or category=0)';
	 else
	 {
		 do{
			var result= await model.query("select id from category where parent in("+parentcateids+") and isopen=1");
			if(result.length<=0)
				break;
			parentcateids=[];
			result.forEach(element => {
				parentcateids.push(element.id);
				cateids.push(element.id);
			});
		 }
		while(true)
		if(cateids.length>0)
			sql+=' and (category in('+cateids+') or category='+cateid+')';
		else
		{
			sql+=' and category='+cateid;
		}
	 }
	 if(parentid==0)
	  	sql+=" and (parent is null or parent ='' or parent=0)";
	 else
	  	sql+=' and parent=?';
	sql+=' order by sort,id';
	console.log(sql);
	var json= await model.query(sql,[parentid]);
	res.send(json);
	 
});
module.exports=router;