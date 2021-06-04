var st = "AAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBHHHHHHJJJJJJAAAAAA";

function shortner(str)
{
    let temp = '' 
    let counter = 0
    let final = ''
    for(let i=0;i<str.length;i++)
    {
        if(temp != str[i])
        {
            if(i!=0)
            {
                final =  final+String(counter)+temp
            }
            temp = str[i]
            counter = 1
        }
        else
        {
            counter++
        }
        if(i==str.length-1)
        {
            final =  final+String(counter)+temp
            console.log(final)
        }
    }
}

shortner(st)
orginialString(f)

function orginialString(srtStr)
{
     let c = []
     let count = []
     let str = srtStr.split('')
     let temp = ''
     let f = ''
     for(let j=0;j<str.length;j++)
     {
        if(!isNaN(str[j]))
        {
            temp = temp+str[j]
        }
        else
        {
            c.push(str[j])
            count.push(temp)
            temp = ''
        }
     }

     for(let k=0; k<c.length; k++)
     {
         for(let l=0;l<parseInt(count[k]);l++)
         {
             f = f+c[k]
         }
     }
    console.log(f)
}

