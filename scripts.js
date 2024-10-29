
document.addEventListener(`DOMContentloaded`, function() {
    const button = document.getElementById(`changeTextButton`);
    button.addEventListener(`click`,function() {
        const introSection = document.getElementById(`intro`);
        introSection.innerHTML = `<p>El texto ha cambiado desde de hacer click en el boton!</p>`;
    });
});