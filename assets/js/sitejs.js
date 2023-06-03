
//define the function
a="<img src=assets/images/logo.png width=50px ><p>"
function intro(){
g =document.getElementById('display')
g.innerHTML=a+"Welcome to Mason Events"
}

intro()


function intro_02(){
g =document.getElementById('display')

b="Our services include <hr width=50%>"
c=" <img src=assets/images/1.jpg width=250px height=300px >"
g.innerHTML=a+b+c
}



function intro_03(){
g =document.getElementById('display')
b="Events management & Sponsorship <hr width=50%>"
c=" <img src=assets/images/2.jpg width=250px height=300px >"
g.innerHTML=a+b+c
}



function intro_04(){
g =document.getElementById('display')
b="Event design and creative solutions<hr width=50%>"
c=" <img src=assets/images/4.jpg width=280px height=300px >"
g.innerHTML=a+b+c
}

let myVar1 =  setInterval(intro_04, 1000);
let myVar2 =  setInterval(intro_02, 5000);
let myVar3 =  setInterval(intro_03, 9000);
let myVar4 =  setInterval(intro_01, 12000);




function go_tohome(){
	specs="width=600px,height=700px"
window.open("index.html","",specs)
}