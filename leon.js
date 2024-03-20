//
//
//========== scrolling progress ============//
let scroller = document.querySelector('#scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


//==========  sticky header ============//
window.onscroll = () =>
{
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 80);
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
  let scrolling = document.documentElement.scrollTop;
  scroller.style.width = `${(scrolling / height)*100}%`
}

//==========   menu icon  ============//
let menuIcon = document.querySelector("#menu-icon")
let navBar = document.querySelector(".nav-menu ul");
menuIcon.onclick = () =>
{
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle("active");
};