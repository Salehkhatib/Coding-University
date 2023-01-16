$(document).ready(() =>{
    if(localStorage.getItem('students') != null){
let array = JSON.parse(localStorage.getItem('students'));
 $('#studentsCount').text(array.length);
    }
    

   
})