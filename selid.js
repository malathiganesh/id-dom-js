let ftext=document.getElementById("food");
let fbtn=document.getElementById("fod");
let output=document.getElementById("ans");
// console.log(ftext,fbtn);
fbtn.addEventListener('click',()=>{
    // document.write(ftext.value);
    output.innerText=ftext.value;
});