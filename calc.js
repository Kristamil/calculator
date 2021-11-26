function clrscreen()
{
    document.getElementById("clr").value="";
}
function display(value)
{
    document.getElementById("clr").value+= value;
}
function calculate()
{
var p=document.getElementById("clr").value;
var q=eval(p);
document.getElementById("clr").value=q;
}
function del()
{
    var str=document.getElementById("clr").value;
    str=str.substr(0,str.length-1);
    document.getElementById("clr").value=str;
}

