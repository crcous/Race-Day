// Produces a random number up to 1000
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true
let runnerAge = 19

// Helps determine what time and what number belongs to each runner
if (runnerAge > 18 && earlyRegister) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber += 1000}`);
} else if (runnerAge > 18) {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`You will run at 12:30 pm. Your race number is ${raceNumber}`);
}
