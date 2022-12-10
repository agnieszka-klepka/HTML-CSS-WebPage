// kalkulator BMI --------------------------------------
let button1 = document.getElementById('btn1');

button1.addEventListener('click1', () => {
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const result = document.getElementById('output');
  let height_status = false, weight_status = false;

  if (height === '' || isNaN(height) || (height <= 0)) {
    document.getElementById('height_error').innerHTML = 'Wprowadź prawidłową wartość wzrostu pomiędzy 1-200cm';
  } else {
    document.getElementById('height_error').innerHTML = '';
    height_status = true;
  }

  if (weight === '' || isNaN(weight) || (weight <= 0)) {
    document.getElementById('weight_error').innerHTML = 'Wprowadź prawidłową wartość wagi, pomiędzy 1-500kg';
  } else {
    document.getElementById('weight_error').innerHTML = '';
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = 'Niedowaga : ' + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = 'BMI prawidłowe : ' + bmi;
    } else {
      result.innerHTML = 'Nadwaga : ' + bmi;
    }
  } else {
    alert('Nieprawidłowa wartość');
    result.innerHTML = '';
  }
});

let button2 = document.getElementById('btn2');

// KALKULATOR ZAPOTRZEBOWANIA KALORYCZNEGO
button2.addEventListener('click2', () => {
  document.getElementById('calorie-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';

    // document.getElementById('loading').style.display = 'block';

    setTimeout(calculateCalories, 10);

    e.preventDefault();
  });

  function calculateCalories(e) {
    
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="customRadioInline1"]:checked');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('list').value;
    const totalCalories = document.getElementById('output2');
    
    
    if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
      errorMessage('Please make sure the values you entered are correct')
    } else if(gender.id === 'male' && activity === "1") {
      totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "2") {
      totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if (gender.id === 'male' && activity === "3") {
      totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "4") {
      totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "5") {
      totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
      ;
    } else if(gender.id === 'female' && activity === "1") {
      totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "2") {
      totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "3") {
      totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "4") {
      totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else {
      totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
    } 

    document.getElementById('results').style.display = 'block';

    // document.getElementById('loading').style.display = 'none';
  }

  function errorMessage(error) {
    document.getElementById('results').style.display = 'none';

    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 4000);
  }

  function clearError() {
    document.querySelector('.alert').remove();
  }
});