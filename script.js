// function showMessage(from, text){
//     console.log(`${from}, ${text}`);
// }
// setTimeout(showMessage,3000,'привет','саня') // остонавливает время


// function showMessage(from, text){
//     console.log(`${from}, ${text}`);
// }
// setInterval(showMessage,1,'привет','саня') //дать интервал



// function showMessage(num){
//     console.log(num)
//     if(num < 20)
//         setTimeout(showMessage, 1000, ++num)
// }
// setTimeout(showMessage,1000 , 1)  //секиндомер



// function showMessage(num){
//     console.log(num)
//     let numberId = setTimeout(showMessage,1000, ++num)
//         if(num === 10)
//             clearTimeout(numberId)
// }
// setTimeout(showMessage,1000 , 1) //taymer




function updateTimer(){
    const now = new Date();
    const Hours  = String(now.getHours()).padStart(2,'0');
    const Minuts  = String(now.getMinuts()).padStart(2,'0');
    const Seconds  = String(now.getSeconds()).padStart(2,'0');


   document.getElementById('Hours').textContent = Hours;
   document.getElementById('Minuts').textContent = Minuts;
   document.getElementById('Seconds').textContent = Seconds;
}


setInterval(updateTimer,1000);
updateTimer();











