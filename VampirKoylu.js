var colors = ["#121212","lightblue"];
var colorIndex = 1;
var times = [300, 600];
var index = 0;
var time = times[index];
var startingMinutes = Math.floor(time / 60); 
var countdownEl = document.querySelector("#countdown");
setInterval(updateCountdown ,1000);
function changeColor() 
{
var col = document.getElementById("map");
if( colorIndex >= colors.length ) 
    {
        colorIndex =0;
    }
col.style.backgroundColor = colors[colorIndex];
colorIndex++;
}
function updateCountdown() 
{
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if(time<0)
    {
        index = (index + 1) % times.length;
        time = times[index];
        startingMinutes = Math.floor(time / 60);
        changeColor();
    }
}
let h= 0; let h1=0; let h2=0; let h3=0; let h4=0;
let h5=0; let h6=0; let h7=0; let h8=0; let h9=0;
function hilal() 
{
    if(h<10)
    {
        h++;
        document.getElementById("h-degeri").innerHTML = ("1.Oyuncu :")  + h;
    }
}
function hilal1() 
    {
        if(h1<10)
        {
            h1++;
            document.getElementById("h1-degeri").innerHTML = ("2.Oyuncu :") + h1;
        }
    }
function hilal2() 
{
    if(h2<10)
    {
        h2++;
        document.getElementById("h2-degeri").innerHTML = ("3.Oyuncu :") + h2;
    }
}
function hilal3() 
{
    if(h3<10)
    {
        h3++;
        document.getElementById("h3-degeri").innerHTML = ("4.Oyuncu :") + h3;
    }
}
function hilal4() 
{
    if(h4<10)
    {
        h4++;
        document.getElementById("h4-degeri").innerHTML = ("5.Oyuncu :") + h4;
    }
}
function hilal5() 
{
    if(h5<10)
    {
        h5++;
        document.getElementById("h5-degeri").innerHTML = ("6.Oyuncu :") + h5;
    }
}
function hilal6() 
{
    if(h6<10)
    {
        h6++;
        document.getElementById("h6-degeri").innerHTML = ("7.Oyuncu :") + h6;
    }
}
function hilal7() 
{
    if(h7<10)
    {
        h7++;
        document.getElementById("h7-degeri").innerHTML = ("8.Oyuncu :") + h7;
    }
}
function hilal8() 
{
    if(h8<10)
    {
        h8++;
        document.getElementById("h8-degeri").innerHTML = ("9.Oyuncu :") + h8;
    }
}
function hilal9() 
{
    if(h9<10)
    {
        h9++;
        document.getElementById("h9-degeri").innerHTML = ("10.Oyuncu :") + h9;
    }
}
