/*// 3 - BMI(Body mass index) measurement 

let weight = parseFloat(prompt("Enter your weight in kg:"));
let height = parseFloat(prompt("Enter your height in meters:"));
let bmi = weight / (height * height);

if (weight < 18.5){
    document.write("You are under weight")
}else if (weight >= 18.5 && weight <= 24.9){
    document.write("Congrats!! You are at the ideal weight")
}else{
    document.write("You are overweight")
}

// 4 - Age group
let age = parseInt(prompt("Enter your age:"));

if (age <= 12) {
  console.log("You are a child.");
} else if (age <= 18) {
  console.log("You are a teenager.");
} else if (age <= 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}



/*
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

// 9 - StringToFloat
let changing_var = "245.3248";
changed_var = parseFloat(changing_var);
document.write(changed_var, "<br>");
document.write(changed_var.toFixed(2));
*/