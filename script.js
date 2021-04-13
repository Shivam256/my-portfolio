// import curDot from 'cursor-dot';
new WOW().init();


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
  const btn = document.querySelector(".explore-btn");
  const greet = document.querySelector(".greeting");
  const img = document.querySelector(".img-container");
  const name1 = document.querySelector(".name");
  const def = document.querySelector(".def");
  const navElem = document.querySelectorAll("ul.nav-list li a");

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
    scale:1.4,
    // background:"#F72585"
    background: "#08da7a"
  })

  for (let i of navElem) {
    cursor.over(i, {
      scale: 0.7,
      background: "#c1fba4"
    })
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
  } else {
    bars[0].style.transform = 'rotate(0deg)'
    bars[1].style.opacity = '1'
    bars[2].style.transform = 'rotate(0deg)'
    isActive = false
  }


})

//================================================================