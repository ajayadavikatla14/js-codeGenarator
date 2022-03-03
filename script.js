
const colorPick=['red','green','#dee825','rgba(222, 232, 37)'];
const btn=document.querySelector('#btn');
const colorText=document.querySelector('.colors');


btn.addEventListener('click',()=>{
    let randomVal=getRandomNumber();
    document.body.style.backgroundColor=colorPick[randomVal];
    btn.style.backgroundColor=colorPick[randomVal];
    colorText.textContent=colorPick[randomVal];
})

const getRandomNumber=()=>{
    return Math.floor(Math.random()*colorPick.length);
}