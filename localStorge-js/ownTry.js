const studentForms = document.getElementById("studentForm")
const todoList = document.getElementById("answerDiv")

const nameInput = studentForms["name"]
const ageInput = studentForms["age"]
const rollInput = studentForms["roll"]

const student = JSON.parse(localStorage.getItem("students")) || []

const studentDetails = (name, age, roll) =>{
    student.push({
        name : name,
        age : age,
        roll : roll
    })
    localStorage.setItem("students" , JSON.stringify(student))
    return({name, age, roll})
} 

const domElements = ({name, age, roll}) =>{
    const mainDiv = document.createElement("div")
    const studentName = document.createElement("h2")
    const studentAge = document.createElement("p")
    const studentRoll = document.createElement("p")

    studentName.innerText = "Student Name : " + name
    studentAge.innerText = "Student Age : " + age
    studentRoll.innerText = "Student Roll  : " + roll

    mainDiv.append(studentName, studentAge, studentRoll)
    todoList.appendChild(mainDiv)
}

student.forEach(domElements)

studentForms.onsubmit = event =>{
    event.preventDefault()

    const studentAdder = studentDetails(
        nameInput.value, 
        ageInput.value, 
        rollInput.value
    )

    domElements(studentAdder)

}