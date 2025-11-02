document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!form) {
        console.error("Napaka: Element #loginForm ni bil najden!");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (emailValue === "" || passwordValue === "") {
            alert("Prosimo, izpolnite vsa polja.");
            return;
        }

        if (!emailRegex.test(emailValue) && !phoneRegex.test(emailValue)) {
            alert("Vnesite veljaven e-naslov ali telefonsko številko.");
            return;
        }

        if (!passwordRegex.test(passwordValue)) {
            alert("Geslo mora vsebovati vsaj 6 znakov, eno črko, eno številko in en poseben znak.");
            return;
        }

        alert("Prijava uspešna!");
        form.submit();
    });
});