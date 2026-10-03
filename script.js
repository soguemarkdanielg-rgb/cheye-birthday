const candles = document.querySelectorAll(".candle");

let candlesOut = 0;

candles.forEach(candle => {

    candle.addEventListener("click", () => {

        const flame = candle.querySelector(".flame");

        // Prevent clicking the same candle twice
        if (flame.classList.contains("off")) {
            return;
        }

        flame.classList.add("off");

        candlesOut++;

        createSmallSmoke(candle);

        // When all candles are out
        if (candlesOut === candles.length) {

            setTimeout(() => {

                createConfetti();

                createFireworks();

                showWishMessage();

            }, 500);

        }

    });

});


function createSmallSmoke(candle) {

    const smoke = document.createElement("div");

    smoke.style.position = "absolute";
    smoke.style.width = "12px";
    smoke.style.height = "12px";
    smoke.style.borderRadius = "50%";
    smoke.style.background = "rgba(255,255,255,0.4)";
    smoke.style.left = "7px";
    smoke.style.top = "-50px";
    smoke.style.pointerEvents = "none";

    smoke.animate(
        [{
                transform: "translateY(0) scale(1)",
                opacity: 0.5
            },
            {
                transform: "translateY(-50px) scale(2)",
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        }
    );

    candle.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 1200);
}


function showWishMessage() {

    const instruction = document.querySelector(".instruction");

    instruction.innerHTML =
        "✨ Make a wish, Cheyeanne! ✨";

    instruction.style.color = "#fff";

    instruction.style.fontSize = "18px";

    instruction.style.fontWeight = "bold";
}


const surpriseBtn =
    document.getElementById("surpriseBtn");

const messageCard =
    document.getElementById("messageCard");

surpriseBtn.addEventListener("click", () => {

    messageCard.classList.toggle("show");

    if (messageCard.classList.contains("show")) {

        surpriseBtn.innerHTML =
            "💖 Hide Your Surprise";

        createConfetti();

        messageCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        surpriseBtn.innerHTML =
            "🎁 Open Your Surprise";

    }

});


const heartContainer =
    document.querySelector(".hearts");

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘",
    "💓",
    "💞"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 12 + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


/* Create hearts continuously */

setInterval(createHeart, 800);


function createConfetti() {

    const amount = 100;

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 15 + 8 + "px";

        confetti.style.background =
            getRandomColor();

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);

    }

}


function getRandomColor() {

    const colors = [
        "#ff70b7",
        "#ffb3dc",
        "#ffffff",
        "#ffd166",
        "#c77dff",
        "#ff6b6b",
        "#7bdff2"
    ];

    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];
}


function createFireworks() {

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            const x =
                Math.random() * window.innerWidth;

            const y =
                Math.random() *
                window.innerHeight *
                0.6;

            createFirework(x, y);

        }, i * 350);

    }

}


function createFirework(x, y) {

    const particles = 30;

    for (let i = 0; i < particles; i++) {

        const particle =
            document.createElement("div");

        particle.style.position =
            "fixed";

        particle.style.left =
            x + "px";

        particle.style.top =
            y + "px";

        particle.style.width =
            "5px";

        particle.style.height =
            "5px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            getRandomColor();

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex = "200";

        document.body.appendChild(particle);

        const angle =
            (Math.PI * 2 * i) / particles;

        const distance =
            Math.random() * 100 + 50;

        const targetX =
            Math.cos(angle) * distance;

        const targetY =
            Math.sin(angle) * distance;

        particle.animate(
            [{
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                {
                    transform: `translate(${targetX}px, ${targetY}px)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 700 + 700,

                easing: "cubic-bezier(.1,.8,.2,1)"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 1500);

    }

}


window.addEventListener("load", () => {

    setTimeout(() => {

        createConfetti();

    }, 1500);

});
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const euphoriaAudio = document.getElementById("euphoriaAudio");
const finalMessage = document.getElementById("finalMessage");

yesBtn.addEventListener("click", function() {

    // Hide NO button after clicking YES
    noBtn.style.display = "none";

    alert("YAY! I knew you'd say yes! 💕 It's a date, Cheyeanne! 🥰");

    euphoriaAudio.currentTime = 0;

    euphoriaAudio.play().catch(function(error) {
        console.log("Audio could not play:", error);
    });

    finalMessage.classList.add("show");

});

noBtn.addEventListener("mouseenter", function() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});