const boxes = document.querySelectorAll('.box');
const checkBoxes=()=>{
    const triger=(window.innerHeight/5)*4;
    for(const box of boxes){
        const topofBox=box.getBoundingClientRect().top;
        if(topofBox<triger){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    }
}

checkBoxes();

window.addEventListener('scroll',checkBoxes);