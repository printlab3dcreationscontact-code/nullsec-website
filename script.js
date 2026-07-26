document.addEventListener("DOMContentLoaded", () => {
    const matrixCanvas = document.getElementById("matrix-bg");
    const matrixContext = matrixCanvas ? matrixCanvas.getContext("2d") : null;
    const mouseGlow = document.getElementById("mouse-glow");
    const bootScreen = document.getElementById("boot-screen");
    const bootOutput = document.getElementById("boot-output");
    const website = document.getElementById("site");
    const heroTitle = document.querySelector(".hero h1");
    const discoverBtn = document.getElementById("discover-btn");
    const aboutSection = document.getElementById("about");
    const aboutTyping = document.getElementById("about-typing");
    const navLinks = document.querySelectorAll("nav a");
    const glitchElements = document.querySelectorAll(".glitch");

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const matrixCharacters =
        "0101010101010101010101010101" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "0123456789" +
        "#$%&@<>[]{}";

    const matrixFontSize = 15;
    const matrixFrameInterval = 1000 / 30;

    let matrixDrops = [];
    let lastMatrixFrame = 0;

    function resizeMatrix() {
        if (!matrixCanvas || !matrixContext) return;

        const dpr = Math.min(
            window.devicePixelRatio || 1,
            2
        );

        const width = window.innerWidth;
        const height = window.innerHeight;

        matrixCanvas.width =
            Math.floor(width * dpr);

        matrixCanvas.height =
            Math.floor(height * dpr);

        matrixCanvas.style.width =
            `${width}px`;

        matrixCanvas.style.height =
            `${height}px`;

        matrixContext.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        const columns =
            Math.ceil(
                width /
                matrixFontSize
            );

        const previousDrops =
            matrixDrops.slice();

        matrixDrops =
            new Array(columns);

        for (
            let i = 0;
            i < columns;
            i++
        ) {
            matrixDrops[i] =
                previousDrops[i] ??
                Math.floor(
                    Math.random() * -100
                );
        }

        matrixContext.fillStyle =
            "#080808";

        matrixContext.fillRect(
            0,
            0,
            width,
            height
        );
    }

    function drawMatrix(timestamp = 0) {
        if (!matrixCanvas || !matrixContext) return;

        requestAnimationFrame(
            drawMatrix
        );

        if (
            timestamp - lastMatrixFrame <
            matrixFrameInterval
        ) {
            return;
        }

        lastMatrixFrame =
            timestamp;

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;

        matrixContext.fillStyle =
            "rgba(8, 8, 8, 0.10)";

        matrixContext.fillRect(
            0,
            0,
            width,
            height
        );

        matrixContext.font =
            `${matrixFontSize}px "Fira Code", monospace`;

        matrixContext.textBaseline =
            "top";

        for (
            let i = 0;
            i < matrixDrops.length;
            i++
        ) {
            const character =
                matrixCharacters.charAt(
                    Math.floor(
                        Math.random() *
                        matrixCharacters.length
                    )
                );

            const x =
                i * matrixFontSize;

            const y =
                matrixDrops[i] *
                matrixFontSize;

            if (
                Math.random() >
                0.965
            ) {
                matrixContext.fillStyle =
                    "rgba(225, 255, 230, 0.95)";

                matrixContext.shadowColor =
                    "#00ff41";

                matrixContext.shadowBlur =
                    8;
            } else {
                matrixContext.fillStyle =
                    "rgba(0, 255, 65, 0.55)";

                matrixContext.shadowBlur =
                    0;
            }

            matrixContext.fillText(
                character,
                x,
                y
            );

            if (
                y > height &&
                Math.random() >
                0.975
            ) {
                matrixDrops[i] =
                    Math.floor(
                        Math.random() * -30
                    );
            } else {
                matrixDrops[i]++;
            }
        }

        matrixContext.shadowBlur =
            0;
    }

    if (
        matrixCanvas &&
        matrixContext
    ) {
        resizeMatrix();

        requestAnimationFrame(
            drawMatrix
        );

        window.addEventListener(
            "resize",
            resizeMatrix
        );
    }

    if (mouseGlow) {
        let targetMouseX =
            window.innerWidth / 2;

        let targetMouseY =
            window.innerHeight / 2;

        let currentGlowX =
            targetMouseX;

        let currentGlowY =
            targetMouseY;

        document.addEventListener(
            "mousemove",
            (event) => {
                targetMouseX =
                    event.clientX;

                targetMouseY =
                    event.clientY;
            }
        );

        function animateMouseGlow() {
            currentGlowX +=
                (
                    targetMouseX -
                    currentGlowX
                ) * 0.12;

            currentGlowY +=
                (
                    targetMouseY -
                    currentGlowY
                ) * 0.12;

            mouseGlow.style.transform =
                `translate3d(${currentGlowX}px, ${currentGlowY}px, 0)`;

            requestAnimationFrame(
                animateMouseGlow
            );
        }

        requestAnimationFrame(
            animateMouseGlow
        );
    }

    function scrambleHeroTitle() {
        if (
            !heroTitle ||
            reducedMotion
        ) {
            return;
        }

        const originalText =
            heroTitle.dataset.text ||
            heroTitle.textContent;

        const letters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-*";

        let iteration = 0;

        const interval =
            setInterval(() => {
                heroTitle.textContent =
                    originalText
                        .split("")
                        .map(
                            (
                                letter,
                                index
                            ) => {
                                if (
                                    letter === " "
                                ) {
                                    return " ";
                                }

                                if (
                                    index <
                                    iteration
                                ) {
                                    return originalText[
                                        index
                                    ];
                                }

                                return letters[
                                    Math.floor(
                                        Math.random() *
                                        letters.length
                                    )
                                ];
                            }
                        )
                        .join("");

                if (
                    iteration >=
                    originalText.length
                ) {
                    heroTitle.textContent =
                        originalText;

                    clearInterval(
                        interval
                    );
                }

                iteration += 1 / 3;
            }, 30);
    }

    function triggerRandomGlitch() {
        if (
            glitchElements.length === 0 ||
            reducedMotion
        ) {
            return;
        }

        const selectedElement =
            glitchElements[
                Math.floor(
                    Math.random() *
                    glitchElements.length
                )
            ];

        if (
            !selectedElement ||
            !document.body.contains(
                selectedElement
            )
        ) {
            setTimeout(
                triggerRandomGlitch,
                2000
            );

            return;
        }

        selectedElement.classList.add(
            "glitch-active"
        );

        setTimeout(() => {
            selectedElement.classList.remove(
                "glitch-active"
            );
        }, 160);

        setTimeout(
            triggerRandomGlitch,
            1500 +
            Math.random() *
            4000
        );
    }

    const bootLines = [
        "NULLSEC BIOS v2.6",
        "CHECKING MEMORY.............. OK",
        "LOADING SECURITY MODULES..... OK",
        "INITIALIZING KERNEL........... OK",
        "ESTABLISHING SECURE CHANNEL... OK",
        "LOADING ENCRYPTION ENGINE..... OK",
        "STARTING FIREWALL............. OK",
        "VERIFYING NETWORK............. SECURE",
        "INITIALIZING NULLSEC.......... OK",
        "",
        "ACCESS GRANTED"
    ];

    let bootLineIndex =
        0;

    function finishBoot() {
        if (website) {
            website.classList.add(
                "site-visible"
            );
        }

        if (bootScreen) {
            bootScreen.classList.add(
                "boot-finished"
            );

            setTimeout(() => {
                bootScreen.style.display =
                    "none";
            }, 800);
        }

        scrambleHeroTitle();

        if (!reducedMotion) {
            setTimeout(
                triggerRandomGlitch,
                900
            );
        }
    }

    function printBootLine() {
        if (!bootOutput) {
            finishBoot();
            return;
        }

        if (
            bootLineIndex <
            bootLines.length
        ) {
            const line =
                document.createElement(
                    "div"
                );

            const text =
                bootLines[
                    bootLineIndex
                ];

            line.className =
                "boot-line";

            line.innerHTML =
                text === ""
                    ? "&nbsp;"
                    : "";

            if (text !== "") {
                line.textContent =
                    `> ${text}`;
            }

            bootOutput.appendChild(
                line
            );

            bootLineIndex++;

            setTimeout(
                printBootLine,
                80 +
                Math.random() *
                160
            );

            return;
        }

        setTimeout(
            finishBoot,
            700
        );
    }

    if (reducedMotion) {
        finishBoot();
    } else {
        setTimeout(
            printBootLine,
            400
        );
    }



    function setupAboutTyping() {
        if (!aboutTyping) return;

        const fullText =
            aboutTyping.dataset.typingText ||
            aboutTyping.textContent ||
            "";

        if (reducedMotion) {
            aboutTyping.textContent = fullText;
            return;
        }

        let hasTyped = false;
        aboutTyping.textContent = "";

        function typeAboutText() {
            if (hasTyped) return;
            hasTyped = true;
            aboutTyping.textContent = "";
            aboutTyping.classList.add("is-typing");

            let index = 0;

            function typeNextCharacter() {
                aboutTyping.textContent =
                    fullText.slice(0, index + 1);

                index++;

                if (index < fullText.length) {
                    const character = fullText[index - 1];
                    const delay = /[.,!?]/.test(character)
                        ? 150
                        : 45 + Math.random() * 55;

                    setTimeout(typeNextCharacter, delay);
                    return;
                }

                aboutTyping.classList.remove("is-typing");
                aboutTyping.classList.add("typing-complete");
            }

            typeNextCharacter();
        }

        if (!("IntersectionObserver" in window)) {
            typeAboutText();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    observer.disconnect();
                    typeAboutText();
                }
            },
            { threshold: 0.45 }
        );

        observer.observe(aboutTyping);
    }

    function setupHoverGlitches() {
        const hoverTargets = document.querySelectorAll(
            "a, .btn, .tiktok-card"
        );

        hoverTargets.forEach((element) => {
            element.classList.add("glitch-hover");
        });
    }

    setupAboutTyping();
    setupHoverGlitches();

    if (
        discoverBtn &&
        aboutSection
    ) {
        discoverBtn.addEventListener(
            "click",
            () => {
                aboutSection.scrollIntoView({
                    behavior:
                        reducedMotion
                            ? "auto"
                            : "smooth",

                    block:
                        "start"
                });
            }
        );
    }

    navLinks.forEach(
        (link) => {
            link.addEventListener(
                "click",
                (event) => {
                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        !targetId.startsWith(
                            "#"
                        )
                    ) {
                        return;
                    }

                    const targetSection =
                        document.querySelector(
                            targetId
                        );

                    if (!targetSection) {
                        return;
                    }

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior:
                            reducedMotion
                                ? "auto"
                                : "smooth",

                        block:
                            "start"
                    });
                }
            );
        }
    );
});
