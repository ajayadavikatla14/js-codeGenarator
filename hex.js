const colorPick=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn=document.querySelector('#btn');
let colorsText=document.querySelector('.colors');

btn.addEventListener('click',()=>{
    let code='#';
    for(let i=0;i<6;i++){
        code+=colorPick[getRandomNumber()];
    }
    document.body.style.backgroundColor=code;
    btn.style.backgroundColor=code;
    colorsText.textContent=code;
})


const getRandomNumber=()=>{
    return Math.floor(Math.random()*colorPick.length);
}