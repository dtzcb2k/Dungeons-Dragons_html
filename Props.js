//要調用裡的方法要用props.bear.effect()
let props;

function UseItem() {
    // 獲取計數器的當前值
    let counterElement = document.getElementById('counter');
    let counterValue = parseInt(counterElement.innerText);
    // 顯示確認對話框
    if (counterValue <= 0) {
        confirm("道具已經用完！");
    } else {
        let useItem = confirm("是否使用該道具？");
        if (useItem) {
            // 如果計數器的值大於 0，則減 1
            if (counterValue > 0) {
                counterValue -= 1;
                counterElement.innerText = counterValue;
            } else {
                alert("道具已經用完！");
            }
    }
    }
    
}