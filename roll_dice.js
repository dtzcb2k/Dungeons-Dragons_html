
//顯示骰子的地方
const picture = {
    "0":"../picture/dice/d0.png",
    "1":"../picture/dice/d1.png",
    "2":"../picture/dice/d2.png",
    "3":"../picture/dice/d3.png",
    "4":"../picture/dice/d4.png",
    "5":"../picture/dice/d5.png",
    "6":"../picture/dice/d6.png",
    "7":"../picture/dice/d7.png",
    "8":"../picture/dice/d8.png",
    "9":"../picture/dice/d9.png",
}
function Feekback(dice_point){
    if (dice_point<10){
        dice_point = '0'+dice_point;
    }
    console.log(dice_point);
    let str = dice_point.toString();
    let one = str[0];
    let two = str[1];
    document.getElementById('roll_dice1').setAttribute('src',picture[one]);
    document.getElementById('roll_dice2').setAttribute('src',picture[two]);
}
