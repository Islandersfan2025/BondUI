const output =
document.getElementById("output");

const commands = [
    "Initializing system...",
    "Loading darknet protocols...",
    "Bypassing firewall...",
    "Acessing encrypted files...",
    "Injecting payload...",
    "Establishing reverse shell...",
    "Acess granted!...",
    "Extracting data from target...",
    "Uploading to secure server...",
    "Operation completed successfully..."
];

let commandIndex = 0;
let charIndex = 0;

function typeCommand() {
    if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
            output.innerHTML += commands[commandIndex].charAt(charIndex)
            charIndex++
            setTimeout(typeCommand, 50);
        } else {
            output.innerHTML += "<br>";
            commandIndex++;
            charIndex = 0;
            setTimeout(typeCommand, 500);
        } 
    } else {
        output.innerHTML += "<br> <span class='cursor'></span>";
    }
}

typeCommand();