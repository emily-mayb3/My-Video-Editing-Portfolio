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
                document.getElementById("form-status").innerHTML =
                    "<p>Submission processed.</p>";

                form.reset();
            })
            .catch(() => {
                document.getElementById("form-status").innerHTML =
                    "<p>Something went wrong with submission.</p>";
            });
    });
});

