let isActivated = false;

function part_second() {
    let browserName, userAg = navigator.userAgent
    let a = document.createElement('a');
    let second = document.getElementById("2");
    a.href = "https://worldoftanks.ru/";
    a.innerText += "Ссылка на любимый сайт";
    document.body.insertBefore(a, second.nextSibling);

    let win = open("", "_blank",
        "scrollbars=yes,popup=yes,width=500,height=300,top="+(screen.height-400)+",left="+(screen.width-840));
        var sUserAgent = navigator.userAgent;
        if (navigator.platform == "Win64") (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh");
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if(isOpera) document.write("Opera ");
        if(isKHTML) document.write("KHTML ");
        if(isIE) document.write("IE ");
        if(isMoz) document.write("Mozilla ");
        if(isWin)  win.document.body.innerText ="Windows";
        if(isMac) document.write("Mac");
        if(isUnix) document.write("Unix");

    win.name = "";
    win.document.head.title = "";
    win.document.body.innerText = "ОС: " + navigator.platform;

    setTimeout(allImages, 5000);
}

function changeStyle() {
    let image = document.getElementById("2");
    isActivated = !isActivated;
    if (isActivated)
    {
        image.style.position = "absolute";
        image.style.width = "auto";
        image.style.height = "auto";
        image.style.right = "10px";
        image.style.bottom = "5px";
        changeColor();
    } else {
        image.style = null;
    }
    function changeColor() {
        let Text = document.getElementById("1");
        Text.style.color = "blue";
        Text.style.backgroundColor = "red";
    }
    
}

function allImages() {
    let mas = document.images;
    for(let i = 0; i < mas.length; i++)
    {
        console.log(mas[i]);
    }
}

