let transition1 = document.querySelector(".transition1")
let transition2 = document.querySelector(".transition2")
let transition3 = document.querySelector(".transition3")
let morpionsound = document.getElementById("morpions")
let jouersound = document.getElementById("jouers")
let sound = document.querySelector(".sound")
let menusound = document.getElementById("mute")
let kunai = document.querySelector(".kunai")
let selectsound = document.getElementById("selects")
let deselectsound = document.getElementById("deselects")
let par1 = document.querySelector(".par1")
let par2 = document.querySelector(".par2")
let parchemin2 = document.getElementById("parchemin2")

transition1.addEventListener("click", function handleClick1(event){
  menusound.src = "audio/minigame.mp3"
  menusound.volume = 0.5
  menusound.currentTime = 0
  jouersound.volume = 0.5
  jouersound.currentTime = 0
  jouersound.play()
  document.querySelector(".box").style.display = "none";
  document.getElementById("table").style.display = "inline-block";
  document.getElementById("Jeu").style.display = "inline-block";
  kunai.style.display = "inline-block";
})

transition2.addEventListener("click", function handleClick2(event){
  if (document.getElementById("parchemin2").classList.contains("active")==true && !document.querySelector(".par2").classList.contains("active")){
    deselectsound.currentTime=0;
    deselectsound.volume = 0.5
    deselectsound.play()
    parchemin2.classList.remove("active")
    parchemin2.classList.add("desactive");
    document.querySelector(".box2").style['border-width'] = '0px';
    document.querySelector(".box2").style['background-color'] = 'burlywood';
    par1.classList.add("desactive");
    par1.classList.remove("active");
    transition2.classList.add("enabled");
  }else{
    selectsound.currentTime=0;
    selectsound.volume = 0.5
    selectsound.play()
    parchemin2.classList.remove("desactive")
    parchemin2.classList.add("active");
    document.querySelector(".box2").style['border-width'] = '3px';
    document.querySelector(".box2").style['background-color'] = 'white';
    par1.classList.add("active");
    par1.classList.remove("desactive");
    par2.classList.remove("active");
    transition2.classList.add("enabled");
  }
})
transition3.addEventListener("click", function handleClick3(event){
  if (document.getElementById("parchemin2").classList.contains("active")==true && !document.querySelector(".par1").classList.contains("active")){
    deselectsound.currentTime=0;
    deselectsound.volume = 0.5
    deselectsound.play()
    parchemin2.classList.remove("active");
    parchemin2.classList.add("desactive");
    document.querySelector(".box2").style['border-width'] = '0px';
    document.querySelector(".box2").style['background-color'] = 'burlywood';
    par2.classList.add("desactive");
    par2.classList.remove("active");
    transition3.classList.add("enabled");
  }else{
    selectsound.currentTime=0;
    selectsound.volume = 0.5
    selectsound.play()
    parchemin2.classList.remove("desactive");
    parchemin2.classList.add("active");
    document.querySelector(".box2").style['border-width'] = '3px'; 
    document.querySelector(".box2").style['background-color'] = 'white';
    par2.classList.add("active");
    par2.classList.remove("desactive");
    par1.classList.remove("active");
    transition3.classList.add("enabled");
  }
})

sound.addEventListener("click", function handleClick(event){
  if (document.getElementById("mute").muted == true){
    document.getElementById("mute").muted = false
  }else{
    document.getElementById("mute").muted = true
  }
})

kunai.addEventListener("click", function handleClick5(event){
  deselectsound.currentTime = 0;
  deselectsound.volume = 0.5
  deselectsound.play();
})