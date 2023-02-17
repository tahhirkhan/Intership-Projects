let registeredEarly = false;
let runnerAge = 0;

let raceNumber = Math.floor(Math.random() * 1000);

if (registeredEarly && runnerAge > 18) {
    raceNumber += 1000;
    console.log(`Your race starts at 9:30 AM and your race number is ${raceNumber}`);
}
else if (!registeredEarly && runnerAge > 18 || runnerAge <= 18) {
    console.log(`Your race start at 11:00 AM and your race number is ${raceNumber}`);
}
else {
    console.log("Please check the registration desk");
}

