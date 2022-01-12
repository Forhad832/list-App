const name = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const message = document.querySelector('#message');
const btn = document.querySelector('.btn');
const list = document.querySelector('#list');



btn.addEventListener('click', function(e){
    e.preventDefault();

    if(name.value == '' && email.value == '' && age.value == '' && message.value == ''){
        alert('please enter your infomation');
    } else {
        const newRow = document.createElement('tr');
        

        const newName = document.createElement('th');
        newName.innerHTML = name.value;
        newRow.appendChild(newName);

        const newEmail = document.createElement('th');
        newEmail.innerHTML = email.value;
        newRow.appendChild(newEmail);

        const newAge = document.createElement('th');
        newAge.innerHTML = age.value;
        newRow.appendChild(newAge);
        
        const newMessage = document.createElement('th');
        newMessage.innerHTML = message.value;
        newRow.appendChild(newMessage);


        newAge.style.color = 'red';
       
        newMessage.style.color = 'red';

        list.appendChild(newRow);
        
    }
})