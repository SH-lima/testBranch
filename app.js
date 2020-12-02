// const jeuDeviner =()=>{
//     // on choisit un chiffre aléatoire 
//     let numberRandom = Math.floor(Math.random()*10)+1
//     console.log(numberRandom)
//     // demande à l'utilisateur de rentrer un chiffre 
//     let chiffreEntrer = window.prompt(" entrer un chiffre enter 1 et 10")
//     console.log(chiffreEntrer)
//     while (chiffreEntrer != numberRandom){
//         if(chiffreEntrer < numberRandom){
//             window.alert("le chiffre est au dessous")
//         } else {
//             window.alert("le chiffre est au dessus")
//         }  
//         chiffreEntrer = window.prompt()  
//     }
//     // si le chiffre est au  dessous 
    
//         window.alert("BRAVO")}

// jeuDeviner();


const handSecond = document.querySelector("#hand-second")


const rotateHand =()=>{
    const now = new Date()
let second = now.getSeconds()
let secondNow = second*6+90
    console.log(second)    
    handSecond.style.transform=`rotate(${secondNow}deg)`
    setTimeout(rotateHand, 1000);
}
rotateHand()


const handMinute = document.querySelector("#hand-minute")
const rotateHandM =()=>{
    const now = new Date()
let minute = now.getMinutes()
let minuteNow = minute*6+90
    console.log(minute)    
    handMinute.style.transform=`rotate(${minuteNow}deg)`
    setTimeout(rotateHandM, 10000);

}
rotateHandM()


const handHours = document.querySelector("#hand-hours")
const rotateHandH =()=>{
    const now = new Date()
    let minute = now.getMinutes()
    let hours = now.getHours()
    let hoursNow = hours*30+90
    console.log(hours)    
    handHours.style.transform=`rotate(${hoursNow}deg)`
    setTimeout(rotateHandH, 100000);

}
rotateHandH()







