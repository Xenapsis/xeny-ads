var nav = ` 
<div class="navbarr">
    <div class="logoflex">
        <img class="navimgg" src="/imgs/favicon.png">
        <h1 class="time">Xenapsis</h1>
    </div>
    <ul class="navbar">
        <a class="navbutton" href="/index.html"><li class="navbarli"> <img id="home" class="navimg" src=""><p1 style="margin-left: 15px"> home</p1></li></a>
        <a class="navbutton" href="/games.html"><li class="navbarli"> <img id="games" class="navimg" src=""><p1 style="margin-left: 15px"> Games</p1></li></a>
        <a class="navbutton" href="/apps.html"><li class="navbarli"> <img id="apps" class="navimg" src=""><p1 style="margin-left: 15px"> apps</p1></li></a>
        <a class="navbutton" href="/proxy.html"><li class="navbarli" > <img id="proxy" class="navimg" src=""><p1 style="margin-left: 15px"> Proxy</p1></li></a>
        <a class="settingsimg" href="/settings.html"><li class="navbarli"> <img id="settings" class="navimg settings" src=""></li></a>
    </ul>
    <h1 id="time" class="time">Local Time :)</h1>
</div>`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", nav);