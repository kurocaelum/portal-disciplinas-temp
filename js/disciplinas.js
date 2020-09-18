const containers_teachers = document.querySelectorAll(".container-teacher-profile")
let selects_teacher = document.querySelector("#select-teacher");

function swap_teacher(new_teacher){

    let selected_teacher = new_teacher.options[selects_teacher.selectedIndex].value;
   
    containers_teachers.forEach((element)=>{

        if(element.getAttribute('index-teacher') == selected_teacher){
            element.classList.remove('d-none')
            
        }else{
            if(!element.classList.contains('d-none')){
                element.classList.add('d-none')
            }
        }
    })
}



