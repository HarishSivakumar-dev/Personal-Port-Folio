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
        var ob=document.getElementById("scr3").scrollIntoView(true)
        ob.scrollIntoView({behavior:"smooth"});
    }
    else if(op=="Skills" || op=="computer")
    {
        var ob=document.getElementById("scr4").scrollIntoView(true)
        ob.scrollIntoView({behavior:"smooth"});
    }
    else if(op=="Contact" || op=="phone")
    {
        var ob=document.getElementById("scr5").scrollIntoView(true)
        ob.scrollIntoView({behavior:"smooth"});
    }
    else if(op=="arrow_upward")
    {
        var ob=document.getElementById("scr1").scrollIntoView(true)
        ob.scrollIntoView({behavior:"smooth"});
    }
}
function point(event)
{
    event.target.style.cursor="pointer";
}

function sc()
{
    console.log("sivakumar");
    var tst=document.getElementsByClassName("rigth-split");
}

function show(event)
{
    console.log("billie !")
    var op=event.target.className
    if(op=="material-icons")
    {
        var ob=document.getElementById("left")
        console.log(ob)
        ob.classList.add("visible");
        var ob2=document.getElementById("shr1")
        ob2.style.zIndex="3";
        var ob3=document.getElementById("shr")
        ob3.style.zIndex="0"
        ob3.style.visibility="hidden";
        ob2.style.visibility="visible";
    }
    else
    {
        console.log(op)
    }
}
function hide(event)
{
    console.log("eilish");
    var op=event.target.className
    if(op=="material-icons")
    {
        var ob=document.getElementById("left")
        var ob2=document.getElementById("shr1")
        var ob3=document.getElementById("shr")
        ob.classList.remove("visible");

        ob2.style.zIndex = "-2";
        ob3.style.zIndex = "3";
        ob2.style.visibility="hidden";
        ob3.style.visibility="visible";
    }
    else
    {
        console.log(op)
    }

    
}
function hov()
{
    document.getElementById("shr").style.cursor="pointer"
    document.getElementById("shr1").style.cursor="pointer"
}

function submitData()
{
    var nam=document.getElementById("na11").value;
    var mail=document.getElementById("na12").value;
    var subject=document.getElementById("na13").value;
    var message=document.getElementById("na1").value;

    const data = {
      name: nam,
      email: mail,
      sub: subject,
      message: message
    };

    fetch('http://localhost:8080/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('Data saved successfully:', responseData.message);
      alert("message sent !");
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
    
}
