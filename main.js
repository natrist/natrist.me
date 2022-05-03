window.onload = function() {
    computeAge();
}

function computeAge()
{
    var dateOfBirth = new Date(1996, 2, 3);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    document.getElementById("age").innerHTML = age;
}
