function chai(value)
{
    let out = []
    let trigger = false
    n = parseInt(value.split(',')[0].split(':')[1])
    k = parseInt(value.split(',')[1].split(':')[1])
    g = parseInt(value.split(',')[2].split(':')[1])
    b = parseInt(value.split(',')[3].split(':')[1])
    console.log(n, k, g, b)
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<k;j++)
        {
            if(g>0 && trigger == false)
            {
                g--
                out.push('Green')
                if(j==k-1)
                {
                    trigger = true
                }
            }
            else
            {
                if(b>0 && trigger == true)
                {  
                    b--
                    out.push('Black')
                    if(j==k-1)
                    {
                        trigger = false
                    }
                }
            }
        }
    }
    if(out.length == n)
    {
        console.log(out)
    }
    else
    {
        console.log('[]')
    }
}
  

chai('n:5, k:1, g:3, b:2')