let today = new Date();
let Arrion_birthday = new Date(2018, 3, 9); // Months start from 0 instead of 1

let Arrion_years = today.getFullYear() - Arrion_birthday.getFullYear();
let Arrion_months = today.getMonth() - Arrion_birthday.getMonth();

// Fixing negative months
if (today.getMonth() - Arrion_birthday.getMonth() < 0) {
    Arrion_years -= 1;
    Arrion_months += 12;
}

let Arrion_age = Arrion_years + (Math.round((Arrion_months/12) * 10) / 10);

// Run only if element Arrion_age is detected on the current page
if (document.getElementById("Arrion_age")) { 
    document.getElementById("Arrion_age").innerHTML = Arrion_age;
}



function handleKeydown(KeyboardEvent) {
    if (KeyboardEvent.key == "F3") {
        console.log("hitboxes enabled");
        document.body.classList.toggle("show_borders");
    }
}

// On keydown event (a key pressed) run function handleKeydown with generated KeyboardEvent object automatically passed
document.addEventListener("keydown", handleKeydown);