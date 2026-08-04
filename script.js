const calculateButton = document.querySelector('.calculate button')
calculateButton.addEventListener('click', function() {
    const height = document.getElementById('height').value/100;
    const weight = document.getElementById('weight').value;
    if (!height || !weight || height <= 0 || weight <= 0) {
        document.querySelector('.result').textContent = "Please enter valid height and weight!";
        return;
    }
    const bmi = weight / (height * height);
    document.querySelector('.result').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});