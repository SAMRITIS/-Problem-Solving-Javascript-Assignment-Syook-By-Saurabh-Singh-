
function amIperfect(num)
{
    let sumFact = 0
    for(let i=0;i<num;i++)
    {
        if(num%i == 0)
        {
            sumFact = sumFact + i
        }
    }
    if(sumFact == num)
    {
        console.log("perfect number")
    }
    else if(sumFact > num)
    {
         console.log("Abundant")
    }
    else
    {
        console.log("Deficient")
    }
}


amIperfect(6)