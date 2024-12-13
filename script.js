function updateCard() {
    document.getElementById("SchoolNameVal").innerHTML = document.getElementById("schoolName").value;
    document.getElementById("StudentNameVal").innerHTML = document.getElementById("studentName").value;
    document.getElementById("DateofBirthVal").innerText = document.getElementById("dateOfBirth").value;
    document.getElementById("RollnoVal").innerText = document.getElementById("rollNumber").value;
    document.getElementById("contactNumberVal").innerText = document.getElementById("contactNumber").value;

    // console.log(schoolNametxt, studentNametxt, dateOfBirthtxt, rollNumbertxt, contactNumbertxt);
}
function clearAll() {
}
function printIdCard() {
    window.print();
}

//     document.getElementById("schoolName").value = "";
//     document.getElementById("studentName").value = "";
//     document.getElementById("dateOfBirth").value = "";
//     document.getElementById("rollNumber").value = "";
//     document.getElementById("contactNumber").value = "";
// }
// for easy way we can use inline js write ' type = "reset" ' in html file at 'clear all' button. but by this all content will be removed we cannot clear specific element , so for this we can use function methode

// echo "# Student-Card" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/siddesh140/Student-Card.git
// git push -u origin main