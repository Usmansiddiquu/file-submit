function Student(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Student.prototype.getfullname = function () {
    return `${this.firstName} ${this.lastName}`
}
Student()
// var student = new Student("usman", "siddiqui");
// var student2 = new Student("umar", "siddiqui");


// console.log(student.hasOwnProperty("getfullname"))



// console.log(Object.entries(student))
// for(var key in Student){
//     console.log(Student.[key])
// }
// for(var key in student){
//     console.log(student[key])
// }



// console.log("getfullname" in student )
// console.log(student2.getfullname())



// function submit(){
    // var dropdown = document.getElementById ("dropdown");
    // console.log(dropdown.value)


//     var gender = document.getElementsByName("gender")

// for(var i =0; i < gender.length; i++ ){
//     if (gender[i].checked){

//         console.log(gender[i].value)
//     }
// }

// var file = document.getElementById("file");
// var image = document.getElementById("image");
// image.src = URL.createObjectURL(file.files[0])
// } 

// function filesubmit(){

//     var file = document.getElementById("file");
//     var image = document.getElementById("image");
//     image.src = URL.createObjectURL(file.files[0])


// }