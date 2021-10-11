console.log("chrome go extention")

var cards = document.getElementById('evdformatbody4')

var fomattedCards = []
var receit_number = document.getElementById('txtRechargeID').innerHTML
var denomination =  document.getElementById('txtDenomination').innerHTML
var total = document.getElementById('txtTotal').innerHTML
var cashier = document.getElementById('txtUser').innerHTML
for (var r = 0, n = cards.rows.length; r < n; r++) {
    fomattedCards.push({card_number:removeTags(cards.rows[r].cells[0].innerHTML).trim(),serial_number:cards.rows[r].cells[1].innerHTML.trim()})
}

// console.log(fomattedCards)
function removeTags(str) { 
    if ((str===null) || (str==='')) 
        return false; 
    else
        str = str.toString(); 
    return str.replace( /(<([^>]+)>)/ig, ''); 
} 
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    sendResponse({
        data:{
            receipt :receit_number,
            denomination:denomination,
            total_amount:total,
            cards:fomattedCards,
            cashier:cashier
        } 
    })
   console.log(message)
}
