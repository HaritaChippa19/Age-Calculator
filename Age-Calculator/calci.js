let calculate = document.querySelector("button");

calculate.addEventListener("click", function(){
    let dobInput = document.querySelector("#date").value;

    if (!dobInput) {
        document.getElementById("result").innerText = "Please select your date of birth!";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust months and days if needed
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        `You are ${years} years, ${months} months, and ${days} days old. \u{1F389}`;
});

