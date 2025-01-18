function table()
{
    const c = document.getElementById('col').value;
    const r = document.getElementById('row').value;
     
    var i = 0;
    var part = '';

    if(c > 0 && r > 0)
    {
        for(i = 1; i <= r; i++)
            {
             
                part +=`<div style="display: flex;  gap: 2px;">`
                for(var j = 1;j <= c;j++)
                {
                    var s = i * j;
                    part += `
                    <div style="width: 30px; height: 30px; border: 2px solid blue;" >${s}</div>
                    `
                }
                part +=`</div>`
              part +=`<br>`
            }
            document.getElementById('tab').innerHTML = part;
    }
    else
    {
        document.getElementById('tab').innerHTML = 'can not enter below 0 values'
    }


} 
