const express=require('express');
const app=express();
const port=3000;

function sum(n)
{
  let answ=0;
  for(let i=1;i<=n;i++)
  {
    answ=answ+i;
  }
  return answ; 
}

app.get('/',function(req,res){
  const n=req.query.n;
  const ans=sum(n);
  res.send("My value is "+ans);
});

app.get('/msg',(req,res)=>{res.send("Hello CODER....");});
app.listen(3000);


/*
//STATUS CODES
404-Page not found
403-Authentication issue 
411- Input mismatch
200 -OK good 
500 -Internal server error 
*/
