const burger=document.querySelector('.burger');
const navbar=document.querySelector('.navbar');
const navlist=document.querySelector('.nav_list');
const rightnav=document.querySelector('.right-nav');

burger.addEventListener('click',()=>
{
    navbar.classList.toggle('hnav');
    navlist.classList.toggle('vnav');
    rightnav.classList.toggle('vnav');
})
