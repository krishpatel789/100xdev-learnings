//Promises are a  way of getting rid of callbacks
//It is a synatatic of way of writing things,but uses callbacks under the hood


/*
//Syntax to read file content from our js program
//fs.readFile has three parameters
    1.File Namee 
    2.Charater 
    3.Function with namely two parameters err and data


*/

const fs=require("fs"); //fs -fileSystem
// fs.readFile('aa.txt',"utf-8",function(err,data){console.log(data);});
/*
function readdfile(cb)
{
    fs.readFile('aa.txt',"utf-8",function(err,data){cb(data);});
}

function passinto(data)
{
    
    console.log(data);
}
readdfile(passinto);

*/

/*

//What is Promise?
 >>Promise is just a class that makes callbacks and async functions slightly more readable
function readfilepms()
{
    console.log('start of readfilepms');
    return new Promise(function(resolve){
        
        fs.readFile('aa.txt','utf-8',function(err,data){resolve(data);});
        console.log('start of Promise');
        for(let i=0;i<=2000_000_000;i++)
        {
            if(i==2000000000)
            {
                console.log('for loop is completed');
            }

        }
        console.log('End of Promise');
    })
}
function Passintoo(data)
{
    console.log('Inside Passintoo');
    console.log(data);
    console.log('End of Passinto Function');

}
var c=readfilepms();

c.then(Passintoo);

*/



/* 
TRY TO MARINATE THE CODE...


function readfilepms()
{
    console.log('start of readfilepms');
    return new Promise(function(resolve){
        
        fs.readFile('aa.txt','utf-8',function(err,data){resolve(data);});
        console.log('start of Promise');
        for(let i=0;i<=2000_000_000;i++)
        {
            if(i==2000000000)
            {
                console.log('for loop is completed');
            }

        }
        console.log('End of Promise');
    })
}
function Passintoo(data)
{
    console.log('Inside Passintoo');
    console.log(data);
    console.log('End of Passinto Function');

}
var c=readfilepms();

c.then(Passintoo);



//Example 2
function readfilepms()
{
    console.log('start of readfilepms');
    return new Promise(function(resolve){
        
      
        setTimeout(function k(){return resolve('PROMISE IS CALLED OUTSIDE');},10000);
        console.log('start of Promise');
        for(let i=0;i<=2000_000_000;i++)
        {
            if(i==2000000000)
            {
                console.log('for loop is completed');
            }

        }
        console.log('End of Promise');
    })
}
function Passintoo(data)
{
    console.log('Inside Passintoo');
    console.log(data);
    console.log('End of Passinto Function');

}
var c=readfilepms();
c.then(Passintoo);

*/





function greet()
{
    return new Promise(function(resolve)
    {
        resolve("Hello From Here");
    }
    )
}

async function msg(data)
{
    console.log(await greet());

}
msg();
