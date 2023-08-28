document.addEventListener("DOMContentLoaded", function() {
    const outputElement = document.getElementById("output");
    const form = document.getElementById("data-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const message = document.getElementById("message").value;
        const password = document.getElementById("password").value;

        console.log(message)

        const data = { message, password };

        console.log(data)

        fetch("https://asphragus.pythonanywhere.com/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log("Result:", result);
            outputElement.innerHTML = "";
            outputElement.innerHTML = result.message;
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });

});
