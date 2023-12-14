let inputs = document.querySelectorAll("input")
let labels = document.querySelectorAll("label")
let form = document.querySelector("form")
inputs.forEach((item,index)=>{
    item.addEventListener("blur",function(){
        if(item.value!==null || item.value!== ""){
            labels[index].style.display = "none"
        }else{
            labels[index].style.display = "inline-block"
        }
    })
})
form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("user added successfully");
})