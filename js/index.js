// Here you can access the colors variable
// have fun

const color =document.querySelector('body > script:nth-child(2)')
const  pallete=document.querySelector('#pallete')
const button=document.querySelector('body > div > div > div.control > button')

button.addEventListener('click' ,function(e){
    pallete.style.backgroundColor =colors[Math.floor(Math.random() * colors.length)];
})

const input=document.querySelector('#color')
input.addEventListener('keypress',function(e){
    if(e.code === 'Enter') {
        pallete.style.backgroundColor = e.target.value;
    }
})