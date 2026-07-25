document.addEventListener('DOMContentLoaded', () => {

    
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-*";
        let iteraction = 0;
        
        const interval = setInterval(() => {
            heroTitle.textContent = originalText
                .split('')
                .map((letter, index) => {
                    if (index < iteraction) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join('');
            
            if (iteraction >= originalText.length) {
                clearInterval(interval);
            }

            iteraction += 1 / 3;
        }, 30);
    }


    const discoverBtn = document.querySelector('.btn');
    const contentSection = document.querySelector('.content');

    if (discoverBtn && contentSection) {
        discoverBtn.addEventListener('click', () => {
            contentSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

});

//What do we do now?
//we need to put ... wait
//for now let's keep it like this i think
// we can always update
//I'm sending you the screenshot of the site via Wire.
//ok
//wire is loading
// is too long
// do you have a discord ?
//yes ofc add me Di21kendy don't ask me abt the pfp i lost a bet and now i have to keep it forever :(
//ok
//It's not working for me.
//give me your discord
//my discord is breaxch you can add me 
//you lead me
//yes just wait 2sec
//okk
//wait 
//I changed the style, go see
//niceee
//Okay, we need to create a terminal.js for a different style.
//okk
//2 mins wait
//what's the tik tok account????
//in the @yourusername wwe put the account
//I have to leave—I'm giving you the files! to discord my username titok is "aidropz1"
//who posts more tho we need to put him don't we?? or i will add multiple don't wworry
//You saw my usermane?
//
//yess
//If you want to get the files, go to the Discord conversation; I posted a link for you.