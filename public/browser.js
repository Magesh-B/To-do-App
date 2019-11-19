
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit-me'))
    {
       let userInput = prompt('check');
       axios.post('/update-item',{text : userInput, id : e.target.getAttribute("data-id")}).then(function (){
       e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;

       }).catch(
           console.log("PLease try again later")
       );
    }
})