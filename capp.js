const place = ["London","Paris","Tokyo","Rome","Seoul"];

function displaylist()
{
    var str='';
    for (var i=0; i < place.length;i++)
    {
        str += '<option value="'+place[i]+'"></option>';
    }
    document.getElementById("place").innerHTML = str;
}
function displaylist1()
{
    var str='';
    for (var i=0; i < place.length;i++)
    {
        str += '<option value="'+place[i]+'"></option>';
    }
    document.getElementById("place1").innerHTML = str;
}

function book()
{
    pup=document.getElementById("pickup").value;
    dest=document.getElementById("destination").value;
    var fair=0.0;
    dist=0.0;
    if((pup==="London" && dest==="Paris")||(pup==="Paris" && dest==="London"))
    {
        dist=342.74;
    }
    else if((pup==="London" && dest==="Tokyo")||(pup==="Tokyo" && dest==="London"))
    {
        dist=9561.70;
    }
    else if((pup==="London" && dest==="Rome")||(pup==="Rome" && dest==="London"))
    {
        dist=1434.12;
    }
    else if((pup==="London" && dest==="Seoul")||(pup==="Seoul" && dest==="London"))
    {
        dist=8858.61;
    }
    else if((pup==="Paris" && dest==="Tokyo")||(pup==="Tokyo" && dest==="Paris"))
    {
        dist=8858.61;
    }
    else if((pup==="Paris" && dest==="Rome")||(pup==="Rome" && dest==="Paris"))
    {
        dist=8858.61;
    }
    else if((pup==="Paris" && dest==="Seoul")||(pup==="Seoul" && dest==="Paris"))
    {
        dist=8858.61;
    }
    else if((pup==="Tokyo" && dest==="Rome")||(pup==="Rome" && dest==="Tokyo"))
    {
        dist=8858.61;
    }
    else if((pup==="Tokyo" && dest==="Seoul")||(pup==="Seoul" && dest==="Tokyo"))
    {
        dist=8858.61;
    }
    
    document.getElementById("distance").innerHTML=dist;
}