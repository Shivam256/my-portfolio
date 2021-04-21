// import curDot from 'cursor-dot';
alert("This portfolio is still under development! A lot of changes are to be made.")
new WOW().init();
const img = document.querySelector(".img-container");
const btn = document.querySelector(".explore-btn");
const greet = document.querySelector(".greeting");

const homeSection = document.querySelector("#screen");
const aboutSection = document.querySelector("#about-section");
const skillSection = document.querySelector("#skill-section");
const navs = document.querySelectorAll(".nav-list li");


//gatting the time of day for greeting
var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  greet.textContent = "GOOD MORNING";
} else if (curHr < 18) {
  greet.textContent = "GOOD AFTERNOON";
} else {
  greet.textContent = "GOOD EVENING";
}


//=====================mycursor ====================

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove",(e)=>{
//   cursor.setAttribute("style","top: "+ (e.pageY-10) + "px; left: "+ (e.pageX -10) + "px;")
// });

// document.addEventListener("click",()=>{
//   cursor.classList.add("expand");

//   setTimeout(()=>{
//     cursor.classList.remove("expand");
//   },500);
// })

//============navbar-code===============================



// =========================navbar code======================

window.addEventListener('resize', function () {
  addRequiredClass();
})


function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add('mobile')
  } else {
    document.body.classList.remove('mobile')
  }
}

window.onload = addRequiredClass

if (window.innerWidth > 860) {
  const name1 = document.querySelector(".name");
  const def = document.querySelector(".def");
  const navElem = document.querySelectorAll("ul.nav-list li a");
  const aboutContainer = document.querySelectorAll(".about-container");
  const aboutHead = document.querySelector(".about-heading");

  const cursor = curDot({
    diameter: 80,
    zIndex: 5,
    borderWidth: 2,

    // border color
    borderColor: 'red',

    // easing
    easing: 4,
    // background
    background: "#08da7a"
  })

  cursor.over(btn, {
    scale: 1.6,
    // background:"#560BAD"
    background: "#c1fba4"
  })

  cursor.over(greet, {
    scale: 2,
    background: "#c1fba4"
  })
  cursor.over(name1, {
    scale: 0.8,
    background: "#70e000"
  })
  cursor.over(def, {
    scale: 0.8,
    background: "#70e000"
  })

  cursor.over(img, {
    scale: 1.4,
    // background:"#F72585"
    background: "#08da7a"
  })

  for (let i of navElem) {
    cursor.over(i, {
      scale: 0.7,
      background: "#c1fba4"
    })
  }

  for(let i of aboutContainer){
    cursor.over(i,{
      scale:1.5,
      background:"#8DF648"
    })
  }

  cursor.over(aboutHead,{
    scale:0.8,
    background:"#3e045b"
  })

  const skillIcons = document.querySelectorAll(".example-skill-icon");
  for(let i of skillIcons){
    cursor.over(i,{
      scale:1.4,
      background: "#c1fba4"
    })
  }

  // window.onscroll = function () {
  //   myFunction()
  // };
  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }

}

if(window.innerWidth < 860){
  const pD = document.querySelectorAll(".about-info p");
  for(let i of pD){
    i.textContent = "";
  }
}




let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function () {
  mobileNav.classList.toggle('open')
  if (!isActive) {
    bars[0].style.transform = 'rotate(45deg)'
    bars[1].style.opacity = '0'
    bars[2].style.transform = 'rotate(-45deg)'
    isActive = true
    img.style.opacity = "0"
    btn.style.opacity = "0"

  } else {
    bars[0].style.transform = 'rotate(0deg)'
    bars[1].style.opacity = '1'
    bars[2].style.transform = 'rotate(0deg)'
    img.style.opacity = "1"
    btn.style.opacity = "1"
    isActive = false
  }


})

//================================================================
btn.addEventListener("click",()=>{
  if(window.innerWidth > 860){
    window.scrollBy(0,(window.innerHeight));
  }
  else{
    window.scrollBy(0,(window.innerHeight)*(0.9));
  }

});

//================skill section js==========================

const skillNames = ["HTML","CSS","JAVASCRIPT","REACT JS","NODE JS","EXPRESS JS","MONGO DB","FIREBASE","REDUX","C++"];

const skillLevels = [95,80,85,75,70,80,85,72,75,97];
const skillContainer = document.querySelector(".skill-level-container");

const createSkill = (names,levels)=>{
  const skillLevel = document.createElement("div");
  skillLevel.classList.add("skill-level");
  const skillName = document.createElement("div");
  skillName.classList.add("skill-name");
  const skillLv = document.createElement("div");
  skillLv.classList.add("skill-lv");
  const skilllvMastered = document.createElement("div");
  skilllvMastered.classList.add("skill-mastered-lv");

  skillName.textContent = names;
  skilllvMastered.style.width = `${levels}%`;

  skillLv.append(skilllvMastered);
  skillLevel.append(skillName,skillLv);

  return skillLevel;
}

for(let i=0; i<skillLevels.length; i++){
  const skill = createSkill(skillNames[i],skillLevels[i]);
  skillContainer.append(skill);

}


// const lvs = document.querySelectorAll(".skill-mastered-lv");

// let id = null;
// for(let i=0; i<skillLevels.length; i++){
//   let wdS = skillLevels[i];
//   let ctr = 0;
//   clearInterval(id);
//   let currSkill = lvs[i];
//   id = setInterval(moveSkill,5);
//   function moveSkill(){
//     if(currSkill.style.width == `${wdS}%`){
//       clearInterval(id);
//       continue;
//     }
//     else{
//       currSkill.style.width = `${ctr}%`;
//       ctr = ctr+1;
//     }
//   } 
// }

// skillSection.addEventListener("mouseenter",()=>{
//   console.log("in skill section");
// })
// skillSection.addEventListener("mouseleave",()=>{
//   console.log("out of skill section");
// })

//changing the nav active state accirding the position of element
homeSection.addEventListener("mouseenter",()=>{
  navs[0].classList.add("active");
});
homeSection.addEventListener("mouseleave",()=>{
  navs[0].classList.remove("active");
});

aboutSection.addEventListener("mouseenter",()=>{
  navs[1].classList.add("active");
});
aboutSection.addEventListener("mouseleave",()=>{
  navs[1].classList.remove("active");
});

skillSection.addEventListener("mouseenter",()=>{
  navs[2].classList.add("active");
})
skillSection.addEventListener("mouseleave",()=>{
  navs[2].classList.remove("active");
})

