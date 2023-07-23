const place = ["London","Paris","Sydney","Tokyo","New York","Rome","Washington DC","Beijing","Seoul","Bangkok"];

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
    else if((pup==="London" && dest==="Sydney")||(pup==="Sydney" && dest==="London"))
    {
        dist=16994.33;
    }
    else if((pup==="London" && dest==="Tokyo")||(pup==="Tokyo" && dest==="London"))
    {
        dist=9561.70;
    }
    else if((pup==="London" && dest==="New York")||(pup==="New York" && dest==="London"))
    {
        dist=5570.64;
    }
    else if((pup==="London" && dest==="Rome")||(pup==="Rome" && dest==="London"))
    {
        dist=1434.12;
    }
    else if((pup==="London" && dest==="Washington DC")||(pup==="Washington DC" && dest==="London"))
    {
        dist=5897.96;
    }
    else if((pup==="London" && dest==="Beijing")||(pup==="Beijing" && dest==="London"))
    {
        dist=8138.09;
    }
    else if((pup==="London" && dest==="Seoul")||(pup==="Seoul" && dest==="London"))
    {
        dist=8858.61;
    }
    else if((pup==="London" && dest==="Bangkok")||(pup==="Bangkok" && dest==="London"))
    {
        dist=9532.18;
    }
    document.getElementById("distance").innerHTML=dist;
}