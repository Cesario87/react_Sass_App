document.querySelector("form.form").addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(event.target.elements);
    console.log(event.target.user.value);
    console.log(event.target.password.value);


    const name = event.target.user.value;
    const email = event.target.password.value;

    let validated = true;
    
    if (user.length < 5 && !user.includes([0-9])) {
        alert("Name too short or does not contain numbers");
        validated = false;
        //document.getElementById('name').style.backgroundColor = "red";
    }
    
    if (password.length < 7 && !password.includes([0-9])) {
        alert("Password too short or does not contain numbers");
        validated = false;
        //document.getElementById('name').style.backgroundColor = "red";
    }
    
    if (validated) {
        alert("Form was sent")

    }
})

