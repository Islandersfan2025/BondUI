const output =
document.getElementById("output");

const commands = [
    "SilverMoon- 5.39% Coupon Rate, 1/1/2028 Maturity Date, USDC <a href="https://islandersfan2025.github.io/Bond-DecryptionUI/">Example</a>",
    "CoffeeSwap- 5.39% Coupon Rate, 1/1/2028 Maturity Date, ETH",
    "Charles Duncan Investments- High Yield Bond 12% APY, 1/1/2028 Maturity Date, USDT"
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


