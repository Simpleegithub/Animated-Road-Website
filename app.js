let buttons=document.querySelectorAll('.navigation-button');


Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',function(){
        item.parentElement.parentElement.classList.toggle('change');
    })

})