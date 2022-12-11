const cat_btn=document.getElementById('cat_btn');
const dog_btn=document.getElementById('dog_btn');
const cat_res=document.getElementById('cat_res');
const dog_res=document.getElementById('dog_res');

cat_btn=addEventListener('click',getRandomCat);
dog_btn=addEventListener('click',getRandomDog);

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
    .then((res)=> res.json())
    .then((data)=>cat_res.innerHTML=`<img src=${data.file} alt=cat/>`)
}