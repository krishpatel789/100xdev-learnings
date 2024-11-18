function greet()
{
    console.log("greeet function is called");
    return new Promise(function(resolve)
    {
        console.log("Entry to Promise");
        resolve("Hello From Here");
        console.log("Exit to Promise");
    }
    )
}
async function msg(data)
{
    let val=await greet();
    console.log('Helloo');
    for(let i=0;i<=20000_00000;i++)
    {
        if(i==20000_00000)
        {console.log(val);}
    }
}
console.log("Entry  of the CODEBASE");
msg();
console.log("End of CODEBASE");

for(let i=0;i<=2;i++)
{
    if(i==2)
    {console.log(i);}
}