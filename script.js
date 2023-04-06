// 1 - Declaring var with undefined value:
/*
let undef_var = undefined;
console.log(undef_var, typeof(undef_var));


//2 - Using '%' operator
let number = 15;
let result = 15 % 4; //it returns the remainder of the division
console.log(result);


// 3 - Computing IMC
function computing_bmi (weight, height) {
    BMI = (weight / height / height) * 10000;
    return BMI.toFixed(2);
}  

bmi_result = computing_bmi(70, 170);

if (bmi_result < 18.5){
    console.log(`Your BMI is ${bmi_result}.
You are underweight.`);
}else if (bmi_result <= 24.9){
    console.log(`Your BMI is ${bmi_result}.
You are normal.`);
}else{
    console.log(`Your BMI is ${bmi_result}.
You are overweight.`);
}


// 4 - Checking Age program
let age = prompt("Input your age")

document.write("You have ", age, " years old. ")

if (age <= 12) {
    document.write("You're a child.")
}else if (age <= 18) {
    document.write("You're a teenager.")
}else if (age <= 60) {
    document.write("You're an adult.")
}else {
    document.write("You're an elder.")
}


// 5 - Checking username and password
let username = prompt("Insert your username: ");
let password = prompt("Insert your password: ");

if (username == "admin" && password == 1234){
    document.write("successful login")
}else{
    document.write("username or password incorrect. Try again.")
}

// 6 - Computing avarage
let grade1 = prompt("Input the 1st grade:");
let grade2 = prompt("Input the 2nd grade:");
let grade3 = prompt("Input the 3th grade:");
let grade4 = prompt("Input the 4th grade:");
let grade5 = prompt("Input the 5th grade:");
let grade6 = prompt("Input the 6th grade:");
let grade7 = prompt("Input the 7th grade:");

let avarage = (grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7) / 7;

if(avarage >= 6 ){
    document.write("Congrats!!! you were approved.")
}else{
    document.write("Oh, you failed.")
}

// 7 - User info
let name = prompt("Input your name: ");
let age = prompt("Input your age: ");
let course = prompt("Input your course: ");
let year = prompt("Input your current year of college: ");

document.write("Name: ", name, "<br>");
document.write("Age: ", age, "<br>");
document.write("Course: ", course, "<br>");
document.write("Year: ", year, "<br>");

// 8 - Changing words
let phrase = "O LUGAR VIRA TECNOLOGIA";
document.write(phrase.replace("LUGAR", "MUNDO"));
*/
// 9 - StringToFloat
let changing_var = "245.3248";
changed_var = parseFloat(changing_var);
document.write(changed_var, "<br>");
document.write(changed_var.toFixed(2));