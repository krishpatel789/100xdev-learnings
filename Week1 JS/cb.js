//Example 1:
function square(a)
{
    console.log(a*a);
}

function cube(a)
{
    console.log(a*a*a);
}
function calculate(a,b,fn)
{
    fn(a);
}
calculate(10,20,cube);



//Example 2:

function calculate()
{
    return new Promise(function(Resolve)
    {
        Resolve(10);
    })
    
}

function square(a)
{
    
    console.log(a*a);
    
}
calculate().then(square);


//Example 3:
function calculate()
{
    return new Promise(function(Resolve)
    {
        Resolve(10);
    })
    
}

async function square(a)
{
    let op=await calculate();
    console.log(op);
    console.log(op*op);
}

square();








// function cube(a)
// {
//     console.log(a*a*a);
// }

// calculate().then(square);