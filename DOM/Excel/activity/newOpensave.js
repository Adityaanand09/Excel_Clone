let save = document.querySelector(".save");
let open =document.querySelector(".open");

save.addEventListener("click",function(){
    //2d array save file
    const data =JSON.stringify(sheetDB);
    
    //convert it into blob
    //data -> file like object convert
})