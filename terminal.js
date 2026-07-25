documents.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('term-input');
    const output = document.getElementById('term-output');

    if (!input || !output) return;

    const commands = {
        'help': 'Available commands: help, scan, status, clear',
        'scan': 'Scanning network... [100%] No threats found.',
        'status': 'SYSTEM STATUS: 100% OPERATIONAL | ENCRYPTION: ACTIVE',
        'whoami': 'User level:  GUEST_ANONYMOUS'
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            const line = document.createElement('div');

        line.innerHTML = `<span style="color: #888;">> ${cmd}</span>`;
            output.appendChild(line);

            if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (commands[cmd]) {
                const response = document.createElement('div');
                response.textContent = commands[cmd];
                output.appendChild(response);



   















        //We're creating a fake terminal where people can enter commands.
        //okkk
        //i'll think abt  other ideas
        //ok
        //uh 
        //Maybe we could add our TikToks with a button yes or no ? yesss
        okay 
        //I'll leave it to you.
        //okkk