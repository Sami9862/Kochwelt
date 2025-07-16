function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xanewnlv", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send.mail.html";
    }).catch((error) => {
        console.log(error);
    });
}