function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height /= 100;
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    alert(`BMI = ${bmi} | you are Underweight`);
  } else if (bmi >= 18.5 && bmi < 25) {
    alert(`BMI = ${bmi} | you have Healthy weight`);
  } else {
    alert(`BMI = ${bmi} | you are overweight`);
  }

  if (age >= 19 && age <= 24) {
    if (bmi > 18 && bmi <= 24) {
      alert("healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (bmi >= 20 && bmi <= 25) {
      alert("healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (bmi >= 21 && bmi <= 26) {
      alert("healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 45 && age < 54) {
    if (bmi >= 22 && bmi <= 27) {
      alert("healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (bmi >= 23 && bmi <= 28) {
      alert("healthy");
    } else {
      alert("not healthy");
    }
  } else if (age >= 65) {
    if (bmi >= 24 && bmi <= 29) {
      alert("healthy");
    } else {
      alert("not healthy");
    }
  }
}
