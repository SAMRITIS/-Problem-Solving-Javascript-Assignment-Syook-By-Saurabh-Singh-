function task(num)
{
    let temp = []
    let r = 0
    let b = ''
    let out = []
    let trigger = false
    do {
           r = num%2
           num = parseInt((num - r)/2)
           temp.push(r)
      }
      while (num>0);
      temp = temp.reverse()
      console.log(temp)
      for(let i=0;i<temp.length;i++)
      {
          if(temp[i]==1)
          {
              let t = String(temp[i])
              for(let j=i;j<temp.length;j++)
              {
                  if(j!=i)
                  {
                      t=t+'0'
                  }
              }
              console.log(t)
              if(t=='1')
              {
                  out.push('pop')
              }
              else if(t=='10')
              {
                  out.push('double rip')
              }
              else if(t=='100')
              {
                  out.push('hide your mints')
              }
              else if(t=='1000')
              {
                  out.push('fall')
              }
              else if(t =='10000')
              {
                  trigger = true
              }
          }
      }
      if(trigger == true)
      {
        console.log(out)
      }
      else
      {
        console.log(out.reverse())
      }
      
}
task(31)