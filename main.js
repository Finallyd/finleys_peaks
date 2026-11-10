var today = new Date();
var Arrion_birthday = new Date(2018, 3, 9); // Months start from 0 instead of 1

var Arrion_years = today.getFullYear() - Arrion_birthday.getFullYear();
var Arrion_months = today.getMonth() - Arrion_birthday.getMonth();

// Fixing negative months
if (today.getMonth() - Arrion_birthday.getMonth() < 0) {
    Arrion_years -= 1;
    Arrion_months += 12;
}

var Arrion_age = Arrion_years + (Math.round((Arrion_months/12) * 10) / 10);

document.getElementById("Arrion_age").innerHTML = Arrion_age;