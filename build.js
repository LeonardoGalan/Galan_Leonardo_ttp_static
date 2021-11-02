function theClock () {

    var tClock = new Date ();
    var hours = tClock.getHours();
    var min = tClock.getMinutes();
    var sec = tClock.getSeconds();

    hours = hours > 12 ? hours - 12 : hours;
    if (hours  == 0){
        hours = 12;
    }

    hours = ("0" + hours).slice(-2);
    min = ("0" + min ).slice(-2);
    sec = ("0" + sec).slice(-2);
    document.getElementById('ZaWarudo').innerHTML = hours + " : " + min + " : " + sec;
    var time = setTimeout(theClock,500);
}
