function Pay()
{
    var Name=document.getElementById("Name").value;
    var male=document.getElementById("Male").checked;
    var female=document.getElementById("Female").checked;
    var gender;
    if(male!="")
    {
        gender="Male"
    }
    if(female!="")
    {
        gender="Female"
    }
    document.getElementById("msg").innerHTML=Name+"<br>"+gender; 

}