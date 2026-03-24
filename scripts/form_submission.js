const emailInput = document.getElementById("entry.486751082");
const discordInput = document.getElementById("entry.1610488872");
const descriptionInput = document.getElementById("entry.445112863");

function sanitize(event) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "`": '&grave;',
    };
    const reg = /[&<>"'/]/ig;
    event.target.value = event.target.value.replace(reg, (match) => (map[match]));
}

emailInput.addEventListener('blur', sanitize);
discordInput.addEventListener('blur', sanitize);
descriptionInput.addEventListener('blur', sanitize);


var modal = document.getElementById("form-modal");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("gform");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = new URLSearchParams(new FormData(form));

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSeNJAZ9laF3uHcG6zucdeUFaO-C3l05nrEFh14tHmHDdnwx5A/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: data
        })
            .then(() => {
                document.getElementById("modal-text").innerHTML = `
                <p>Commission form submitted! I will contact you soon to discuss details about the project.</p>
                <span class="close">&times;</span>
                `;
                modal.style.display = "block";

                var span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                }

                form.reset();
            })
            .catch(() => {
                document.getElementById("form-status").innerHTML = `
                <p>Something went wrong with the submission. Please try again later.</p>
                <span class="close">&times;</span>
                `;
                modal.style.display = "block";
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                }
            });
    });
});



window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}