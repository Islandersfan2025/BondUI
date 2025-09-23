const output =
document.getElementById("output");

const commands = [
    "USDC Bonds on Arbitrum",
    "tBTC Bonds on Ethereum",
    "High Yield Bonds 12% APY",
    "USD.e Bonds on Arbitrum",
    "USD1 Treasury Bonds on Base",
    "USDx Bonds on BNB Chain",
    "High Yield Savings Bonds on Base",
    "US Treasury Bonds on Arbitrum",
    "Coffhee Bonds on Ethereum",
    "Coffhee Bonds on Polkadot"
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
