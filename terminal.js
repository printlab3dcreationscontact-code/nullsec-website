document.addEventListener("DOMContentLoaded", () => {
    const input =
        document.getElementById(
            "term-input"
        );

    const output =
        document.getElementById(
            "term-output"
        );

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