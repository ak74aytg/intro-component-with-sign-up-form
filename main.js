'use strict';

const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

const fHelp = document.getElementById('firstNameHelpBlock');
const lHelp = document.getElementById('lastNameHelpBlock');
const eHelp = document.getElementById('emailHelpBlock');
const pHelp = document.getElementById('passwordHelpBlock');

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const ename = document.getElementById('ename');
const pname = document.getElementById('pname');



const tern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!fName.value){
        fHelp.classList.remove('hidden');
        fname.classList.remove('hidden');
    }
    if(fName.value){
        fHelp.classList.add('hidden');
        fname.classList.add('hidden');
    }
    if(!lName.value){
        lHelp.classList.remove('hidden');  
        lname.classList.remove('hidden');  
    }
    if(lName.value){
        lHelp.classList.add('hidden');
        lname.classList.add('hidden');
    }
    if(!email.value){
        eHelp.classList.remove('hidden');  
        ename.classList.remove('hidden');  
    }
    if(email.value){
        eHelp.classList.add('hidden');
        ename.classList.add('hidden');
    }
    if(!password.value){
        pHelp.classList.remove('hidden');  
        pname.classList.remove('hidden');  
    }
    if(password.value){
        pHelp.classList.add('hidden');
        pname.classList.add('hidden');
    }
    if(!email.value.match(tern)){
        eHelp.classList.remove('hidden');
        email.style.color = 'hsl(0, 100%, 74%)';
        ename.classList.remove('hidden');
    }else{
        eHelp.classList.add('hidden');
        email.style.color = 'hsl(249, 10%, 26%)';
        ename.classList.add('hidden');
    }
})
