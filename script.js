const question= document.querySelectorAll('.question');
const answer=document.querySelectorAll('.answer');
const arrow=document.querySelectorAll('.arrow');

question.forEach((el, current)=>{
    el.addEventListener('click', (actual, arrowUp)=>{
        actual=answer[current];
        arrowUp=arrow[current];
        if (actual.classList.contains('active')){
            answer.forEach((e)=>{
               e.classList.remove('active') 
            });
             arrow.forEach((e)=>{
               e.classList.remove('arrow-up') 
            });
            actual.classList.remove('active');
            arrowUp.classList.remove('arrow-up');
            el.classList.remove('bold')
        }else{
             answer.forEach((e)=>{
               e.classList.remove('active') 
            });
             arrow.forEach((e)=>{
               e.classList.remove('arrow-up') 
            });
            actual.classList.add('active');
            arrowUp.classList.add('arrow-up');
            el.classList.add('bold')
        }
    })
})