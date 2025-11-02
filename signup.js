document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const repeatPasswordInput = document.getElementById("repeatPassword");

    if (!form) {
        console.error("Napaka: Element #signupForm ni bil najden!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameValue = nameInput.value.trim();
        const surnameValue = surnameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const repeatPasswordValue = repeatPasswordInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        // Preverjanje praznih polj
        if (
            nameValue === "" ||
            surnameValue === "" ||
            emailValue === "" ||
            passwordValue === "" ||
            repeatPasswordValue === ""
        ) {
            alert("Prosimo, izpolnite vsa polja.");
            return;
        }

        // Preverjanje e-naslova ali telefona
        if (!emailRegex.test(emailValue) && !phoneRegex.test(emailValue)) {
            alert("Vnesite veljaven e-naslov ali telefonsko številko.");
            return;
        }

        // Preverjanje moči gesla
        if (!passwordRegex.test(passwordValue)) {
            alert("Geslo mora vsebovati vsaj 6 znakov, eno črko, eno številko in en poseben znak.");
            return;
        }

        // Preverjanje, ali se gesli ujemata
        if (passwordValue !== repeatPasswordValue) {
            alert("Gesli se ne ujemata.");
            return;
        }

        alert("Registracija uspešna!");
        form.submit();
    });
});