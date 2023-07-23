const place = ["London","Paris","Sydney","Tokyo","New York","Rome","Washington DC","Los Angeles","Toronto","Vienna","Melbourne","Beijing","Seoul","Bangkok"];

function displaylist()
{
    var str='';
    for (var i=0; i < place.length;i++)
    {
        str += '<option value="'+place[i]+'"></option>';
    }
    document.getElementById("place").innerHTML = str;
}