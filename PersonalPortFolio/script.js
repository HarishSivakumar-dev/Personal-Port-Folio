function colorchange(event)
{
    var par=document.getElementById("on");
    var chi=document.getElementById("ic1");
    var par1=document.getElementById("abt");
    var chi1=document.getElementById("ic2");
    var par2=document.getElementById("mis");
    var chi2=document.getElementById("ic3");
    var par3=document.getElementById("sim");
    var chi3=document.getElementById("ic4");
    var par4=document.getElementById("me");
    var chi4=document.getElementById("ic5");
    if(event.target.innerHTML=="Home" || event.target.innerHTML=="home")
    {
        console.log("entered ?")
        par.setAttribute("style","color: white;");
        chi.setAttribute("style","color: blue;");
        par.style.cursor="pointer";
        chi.style.cursor="pointer";
    }
    else if(event.target.innerHTML=="About" || event.target.innerHTML=="person")
    {
        par1.setAttribute("style","color: white;");
        chi1.setAttribute("style","color: blue;");
        par1.style.cursor="pointer";
        chi1.style.cursor="pointer";
    }
    else if(event.target.innerHTML=="Resume" || event.target.innerHTML=="attachment")
    {
        par2.setAttribute("style","color: white;");
        chi2.setAttribute("style","color: blue;");
        par2.style.cursor="pointer";
        chi2.style.cursor="pointer";
    }
    else if(event.target.innerHTML=="Skills" || event.target.innerHTML=="computer")
    {
        par3.setAttribute("style","color: white;");
        chi3.setAttribute("style","color: blue;");
        par3.style.cursor="pointer";
        chi3.style.cursor="pointer";
    }
    else if(event.target.innerHTML=="Contact" || event.target.innerHTML=="phone")
    {
        par4.setAttribute("style","color: white;");
        chi4.setAttribute("style","color: blue;");
        par4.style.cursor="pointer";
        chi4.style.cursor="pointer";
    }
}

function colorrevoke()
{
    var par=document.getElementById("on");
    var chi=document.getElementById("ic1");
    var par1=document.getElementById("abt");
    var chi1=document.getElementById("ic2");
    var par2=document.getElementById("mis");
    var chi2=document.getElementById("ic3");
    var par3=document.getElementById("sim");
    var chi3=document.getElementById("ic4");
    var par4=document.getElementById("me");
    var chi4=document.getElementById("ic5");

    console.log("hello")
    par1.setAttribute("style","color: grey;");
    chi1.setAttribute("style","color: grey;");
    par.setAttribute("style","color: grey;");
    chi.setAttribute("style","color: grey;");
    par2.setAttribute("style","color: grey;");
    chi2.setAttribute("style","color: grey;");
    par3.setAttribute("style","color: grey;");
    chi3.setAttribute("style","color: grey;");
    par4.setAttribute("style","color: grey;");
    chi4.setAttribute("style","color: grey;");
}
function change(event)
{
    var om=event.target.className
    if(om=="fa-brands fa-linkedin")
    {
        event.target.setAttribute("style","background-color: blue");
    }
    else if(om=="fa-brands fa-instagram")
    {
        event.target.setAttribute("style","background-color: blue");
    }
    else if(om=="fa-brands fa-skype")
    {
        event.target.setAttribute("style","background-color: blue");
    }
}
function changerevoke(event)
{
    event.target.setAttribute("style","color: white");
}
function scrll(event)
{
    var op=event.target.innerHTML
    if(op=="Home" || op=="home")
    {
        var ob=document.getElementById("scr1").scrollIntoView(true)
        ob.scrollIntoView({behavior:"smooth"});

    }
    else if(op=="About" || op=="person")
    {
        var ob=document.getElementById("scr2").scrollIntoView(true)
        ob.scrollIntoView({behavior:"smooth"});
    }
    else if(op=="Resume" || op=="attachment")
    {

    }
    else if(op=="Skills" || op=="computer")
    {

    }
    else if(op=="Contact" || op=="phone")
    {
        
    }
}
