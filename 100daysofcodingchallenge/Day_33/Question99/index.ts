//Generate a date object representing your next birthday and log it to the console.
function getnextBirthday (month:number, day:number):Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);

    if (birthday <  today) {
        birthday.setFullYear(year + 1);
    }

    return birthday;
}

const nextBirthday = getnextBirthday(12, 25);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());