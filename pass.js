const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_click');
const registerLink = document.querySelector('.register_click');
const btnLogin = document.querySelector('.btnLogin');
const btnClose = document.querySelector('.close');


// silipin mo yung inspect
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-pop');
});

btnClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-pop');
});