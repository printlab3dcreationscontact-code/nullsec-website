document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("term-input");
    const output = document.getElementById("term-output");

    if (!input || !output) return;

    // Message de bienvenue du terminal
    appendOutput("NullSec OS v1.0.4 loaded.");
    appendOutput("Type 'help' for a list of available commands.");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = input.value.trim().toLowerCase();
            if (command !== "") {
                appendOutput(`> ${input.value}`);
                handleCommand(command);
                input.value = "";
                output.scrollTop = output.scrollHeight;
            }
        }
    });

    function appendOutput(text) {
        const line = document.createElement("div");
        line.className = "term-line";
        line.textContent = text;
        output.appendChild(line);
    }

    function handleCommand(cmd) {
        switch (cmd) {
            case "help":
                appendOutput("Available commands:");
                appendOutput("  help     - Show this list");
                appendOutput("  about    - About NullSec");
                appendOutput("  tiktok   - Links to our TikTok channels");
                appendOutput("  status   - Check system status");
                appendOutput("  clear    - Clear the terminal screen");
                break;

            case "about":
                appendOutput("NullSec provides next-gen cybersecurity solutions & ethical hacking intelligence.");
                break;

            case "tiktok":
                appendOutput("TikTok Accounts:");
                appendOutput("  - Main: @aidropz1");
                appendOutput("  - Second: @ardeon65");
                break;

            case "status":
                appendOutput("System Status: ALL SYSTEMS OPERATIONAL");
                appendOutput("Firewall: ACTIVE");
                appendOutput("Encryption: AES-256-GCM");
                break;

            case "clear":
                output.innerHTML = "";
                break;

            default:
                appendOutput(`Command not recognized: '${cmd}'. Type 'help' for options.`);
                break;
        }
    }
});
