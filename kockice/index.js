
function onLoad(){
    const kockica1 = document.querySelector(".img1");
    const kockica2 = document.querySelector(".img2");
    const h1 = document.querySelector("h1");

    var vrijednostPrveKockice = Math.floor(Math.random() * 6 + 1)
    var vrijednostDrugeKockice = Math.floor(Math.random() * 6 + 1)

    const urlPrefix = "./images/dice"
    const urlSufix = ".png"
    const url1 = urlPrefix + vrijednostPrveKockice + urlSufix;
    const url2 = urlPrefix + vrijednostDrugeKockice + urlSufix;

    kockica1.setAttribute("src", url1)
    kockica2.setAttribute("src", url2)

    const winner = getWinner(vrijednostPrveKockice, vrijednostDrugeKockice);
    h1.textContent = winner;
}

function getWinner(player1score, player2score){
    if (player1score > player2score) {
        return "player1 won!";
    } else if (player2score > player1score) {
        return "player2 won!"
    }
    else return "Tie..."
}

onLoad()