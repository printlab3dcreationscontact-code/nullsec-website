document.addEventListener("DOMContentLoaded", () => {
    const input =
        document.getElementById(
            "term-input"
        );

    const output =
        document.getElementById(
            "term-output"
        );

    const easterEgg =
        document.getElementById(
            "nullsec-easter-egg"
        );

    const easterCanvas =
        document.getElementById(
            "nullsec-easter-canvas"
        );

    const easterContext =
        easterCanvas
            ? easterCanvas.getContext("2d")
            : null;

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    let easterEggActive =
        false;

    let easterAnimationFrame =
        null;

    if (
        !input ||
        !output
    ) {
        return;
    }

    function appendOutput(text) {
        const line =
            document.createElement(
                "div"
            );

        line.className =
            "term-line";

        line.textContent =
            text;

        output.appendChild(
            line
        );
    }

    function stopNullsecRain() {
        if (
            easterAnimationFrame !==
            null
        ) {
            cancelAnimationFrame(
                easterAnimationFrame
            );

            easterAnimationFrame =
                null;
        }

        if (
            easterCanvas &&
            easterContext
        ) {
            easterContext.clearRect(
                0,
                0,
                easterCanvas.width,
                easterCanvas.height
            );
        }
    }

    function startNullsecRain() {
        if (
            !easterCanvas ||
            !easterContext ||
            reducedMotion
        ) {
            return;
        }

        const fontSize =
            18;

        const characters =
            "01NULLSEC#$%&@<>[]{}";

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;

        easterCanvas.width =
            Math.floor(
                width * dpr
            );

        easterCanvas.height =
            Math.floor(
                height * dpr
            );

        easterCanvas.style.width =
            `${width}px`;

        easterCanvas.style.height =
            `${height}px`;

        easterContext.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        const columns =
            Math.ceil(
                width / fontSize
            );

        const drops =
            new Array(columns)
                .fill(0)
                .map(
                    () =>
                        Math.floor(
                            Math.random() * -45
                        )
                );

        let lastFrame =
            0;

        function drawRain(timestamp) {
            if (!easterEggActive) {
                return;
            }

            easterAnimationFrame =
                requestAnimationFrame(
                    drawRain
                );

            if (
                timestamp - lastFrame <
                1000 / 30
            ) {
                return;
            }

            lastFrame =
                timestamp;

            easterContext.fillStyle =
                "rgba(0, 0, 0, 0.12)";

            easterContext.fillRect(
                0,
                0,
                width,
                height
            );

            easterContext.font =
                `${fontSize}px "Fira Code", monospace`;

            easterContext.textBaseline =
                "top";

            for (
                let i = 0;
                i < drops.length;
                i++
            ) {
                const character =
                    characters.charAt(
                        Math.floor(
                            Math.random() *
                            characters.length
                        )
                    );

                const x =
                    i * fontSize;

                const y =
                    drops[i] * fontSize;

                easterContext.fillStyle =
                    Math.random() > 0.96
                        ? "rgba(225, 255, 230, 0.95)"
                        : "rgba(0, 255, 65, 0.68)";

                easterContext.fillText(
                    character,
                    x,
                    y
                );

                if (
                    y > height &&
                    Math.random() > 0.975
                ) {
                    drops[i] =
                        Math.floor(
                            Math.random() * -20
                        );
                } else {
                    drops[i]++;
                }
            }
        }

        easterContext.fillStyle =
            "#000000";

        easterContext.fillRect(
            0,
            0,
            width,
            height
        );

        easterAnimationFrame =
            requestAnimationFrame(
                drawRain
            );
    }

    function triggerNullsecEasterEgg() {
        if (
            !easterEgg ||
            easterEggActive
        ) {
            return;
        }

        easterEggActive =
            true;

        easterEgg.setAttribute(
            "aria-hidden",
            "false"
        );

        easterEgg.classList.add(
            "is-active"
        );

        startNullsecRain();

        setTimeout(() => {
            easterEgg.classList.remove(
                "is-active"
            );

            easterEgg.setAttribute(
                "aria-hidden",
                "true"
            );

            easterEggActive =
                false;

            stopNullsecRain();

            setTimeout(() => {
                input.focus();
            }, 850);
        }, 5000);
    }

    function handleCommand(command) {
        switch (command) {

            case "help":
                appendOutput(
                    "Available commands:"
                );

                appendOutput(
                    "  help     - Show this list"
                );

                appendOutput(
                    "  about    - About NullSec"
                );

                appendOutput(
                    "  tiktok   - Links to our TikTok channels"
                );

                appendOutput(
                    "  status   - Check system status"
                );

                appendOutput(
                    "  whoami   - Display session identity"
                );

                appendOutput(
                    "  matrix   - Display Matrix status"
                );

                appendOutput(
                    "  clear    - Clear the terminal screen"
                );

                break;


            case "about":
                appendOutput(
                    "NullSec provides next-gen cybersecurity solutions & ethical hacking intelligence."
                );

                break;


            case "tiktok":
                appendOutput(
                    "TikTok Accounts:"
                );

                appendOutput(
                    "  - Main: @aidropz1"
                );

                appendOutput(
                    "  - Second: @ardeon65"
                );

                break;


            case "status":
                appendOutput(
                    "System Status: ALL SYSTEMS OPERATIONAL"
                );

                appendOutput(
                    "Firewall: ACTIVE"
                );

                appendOutput(
                    "Encryption: AES-256-GCM"
                );

                appendOutput(
                    "Network: SECURE"
                );

                break;


            case "whoami":
                appendOutput(
                    "guest@nullsec"
                );

                appendOutput(
                    "Privilege level: PUBLIC"
                );

                break;


            case "matrix":
                appendOutput(
                    "Matrix renderer: ONLINE"
                );

                appendOutput(
                    "Digital rain: ACTIVE"
                );

                appendOutput(
                    "Visual layer: SECURE"
                );

                break;


            case "nullsec":
                triggerNullsecEasterEgg();

                break;


            case "clear":
                output.innerHTML =
                    "";

                break;


            default:
                appendOutput(
                    `Command not recognized: '${command}'. Type 'help' for options.`
                );

                break;
        }
    }

    appendOutput(
        "NullSec OS v1.0.4 loaded."
    );

    appendOutput(
        "Type 'help' for a list of available commands."
    );

    input.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key !==
                "Enter"
            ) {
                return;
            }

            const rawCommand =
                input.value.trim();

            const command =
                rawCommand.toLowerCase();

            if (
                command === ""
            ) {
                return;
            }

            appendOutput(
                `> ${rawCommand}`
            );

            handleCommand(
                command
            );

            input.value =
                "";

            output.scrollTop =
                output.scrollHeight;
        }
    );
});
