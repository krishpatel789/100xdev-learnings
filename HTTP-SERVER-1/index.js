const express=require('express');
const app=express();
const port=3000;

app.use(express.json());
var users=[{
    namee:"Jhon",
    kidneys:[
       
        {healthy:true},
        {healthy:false}
        
    ]
}]








/*

GET	   >  Retrieve data	           => Get kidney health information      	   ==>Fetch and display data
POST   >   Add new data            =>Add a new kidney (with health status)     ==>Creating new resources or entries
PUT	   >   Update existing data	   =>Update all unhealthy kidneys to healthy   ==>Modify existing resources
DELETE >	Remove data	           => Delete unhealthy kidneys from the list   ==>Remove or delete resources

*/













//The GET method is used only to retrieve data from the server. It is read only

app.get('/',function(req,res){
    // const jhonKidneys=users[0].kidneys[1];
    // res.send(jhonKidneys);
    const noOfKidneys=users[0].kidneys.length;
    let numberOfHealthy=0;
    for(let i=0;i<noOfKidneys;i++)
    {
        if(users[0].kidneys[i].healthy==true)
        {
            numberOfHealthy=numberOfHealthy+1;
        }
    }
    
    var Unhealthykidneys=noOfKidneys-numberOfHealthy;
    res.send({
        noOfKidneys,
        numberOfHealthy,
        Unhealthykidneys
    });

})
 
 //POST method is used to create or add new data on the server.

app.post('/',function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push(
        {
            healthy: ishealthy
        }
    )
    res.json({
        msg:"POST is done !"
    })
    
})

//The PUT method is used to update existing data on the server.

app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy==false)
        {
            users[0].kidneys[i].healthy=true;
        }
    }
    res.json({
        msg: "Put is done",
        updatedKidneys: users[0].kidneys
    });
    
})

function healthy(kidney)
{
    return kidney.healthy==true;
}

function atleastOneUnhealthy(kidney)
{
    return kidney.healthy==false;
}

//DELETE method is used to remove data from the server.

app.delete('/',function(req,res){
    if(users[0].kidneys.filter(atleastOneUnhealthy)!=0)
    {
        // const op=users[0].kidneys.filter(healthy);
        users[0].kidneys=users[0].kidneys.filter(healthy);
        res.json(users[0].kidneys);

    }
    else
    { 
        res.status(411).json({
            msg:"There is no Unhealthy Kidney to delete"
        })
    }





    
})


app.listen(port);



/*

//USING FILTER DOING SAMETASK



const express=require('express');
const app=express();
const port=3000;

var users=[{
    namee:"Jhon",
    kidneys:[
        {healthy:false},
        {healthy:true},
        {healthy:true},
        {healthy:false}
    ]
}]

function healthyy(x)
{
    return x.healthy==true;
    
}
app.get('/',function(req,res){
    const jhonKidneys=users[0].kidneys[1];
    const noOfKidneys=users[0].kidneys.length;
    const op=users[0].kidneys.filter(healthyy);
    res.send(op);

})
app.listen(port);


*/