function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var dob = new Date(dobInput);
    var currentDate = new Date();

    var ageInMilliseconds = currentDate - dob;
    var ageInSeconds = ageInMilliseconds / 1000;

    var years = Math.floor(ageInSeconds / 31536000);
    var months = Math.floor((ageInSeconds % 31536000) / 2628000);
    var days = Math.floor(((ageInSeconds % 31536000) % 2628000) / 86400);

    var result = "আপনি " + years + " বছর, " + months + " মাস, এবং " + days + " দিন বয়সী হন।";
    document.getElementById("result").innerHTML = result;
}
