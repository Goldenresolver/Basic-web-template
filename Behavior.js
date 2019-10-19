

function openMenu()
{
    var menuButton = document.getElementById("mobileMenuButton");
    var menu = document.getElementById("mobileMenu");
    if(menu.style.display=="block"|| menu.style.display=="")
    {menu.style.display="none";
    

    }
    else if(menu.style.display=="none")
    {
        menu.style.display="block";
    }
}