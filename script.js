window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const words = [
    "Textile Engineer",
    "Web3 Builder",
    "Arc Contributor"
];

let i = 0;

setInterval(() => {
    document.querySelector(".content h2").innerHTML = words[i];
    i = (i + 1) % words.length;
}, 2000);
