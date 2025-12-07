document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("success-message");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Név validáció
    const name = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (name.value.trim() === "") {
      nameError.textContent = "Név megadása kötelező!";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validáció
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Helytelen e-mail formátum!";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Kor validáció
    const age = document.getElementById("age");
    const ageError = document.getElementById("age-error");
    if (!age.value || age.value < 10) {
      ageError.textContent = "Minimum 10 évesnek kell lenned!";
      isValid = false;
    } else {
      ageError.textContent = "";
    }

    // Radio validáció
    const ratings = document.getElementsByName("rating");
    const ratingError = document.getElementById("rating-error");
    let ratingSelected = false;
    for (const r of ratings) if (r.checked) ratingSelected = true;
    
    if (!ratingSelected) {
      ratingError.textContent = "Kérlek értékelj!";
      isValid = false;
    } else {
      ratingError.textContent = "";
    }

    // Checkbox validáció
    const terms = document.getElementById("terms");
    const termsError = document.getElementById("terms-error");
    if (!terms.checked) {
      termsError.textContent = "Kötelező elfogadni!";
      isValid = false;
    } else {
      termsError.textContent = "";
    }

    if (isValid) {
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => successMsg.style.display = "none", 4000);
    }
  });
});