//人物屬性 血量、攻擊力、防禦力、命中率、迴避率、最大生命值
let character;
let prop;//所持有的道具，有用完的就去除掉，有新增的就多上去
function start(){
    if (typeof(Storage) !== "undefined") {//上傳失敗的理由是因為沒有清除之前的character資料導致Character有東西不是[]
        // 使用LocalStorage存储图片数据，也可以使用SessionStorage
        var Character = JSON.parse(localStorage.getItem('character')) || [];//JSON.parse()將json轉成js的格式
        Character.push({"hp":100, "atk":1000, "def":20, "hit":10, "AGI":10,"maxHp":100,"chit":5});
        localStorage.setItem('character', JSON.stringify(Character));//將整個pictures做為一個string存入JSON.stringify(變數)
        // let prop = JSON.parse(localStorage.getItem('prop')) || [];
        // prop["bear"] = {pic:"picture/props/bear.png", effect:reply, number:1};        
        // localStorage.setItem('prop', JSON.stringify(prop));
        document.getElementById("bgm").play();
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}

function SaveCharacter(pass){
    if (typeof(Storage) !== "undefined") {
        // 使用LocalStorage存储图片数据，也可以使用SessionStorage
        var Character = JSON.parse(localStorage.getItem('character')) || [];//JSON.parse()將json轉成js的格式
        Character.push(pass);
        localStorage.setItem('character', JSON.stringify(Character));//將整個pictures做為一個string存入JSON.stringify(變數)
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}

function SaveProp(pass){
    if (typeof(Storage) !== "undefined") {
        let prop = JSON.parse(localStorage.getItem('prop')) || [];//JSON.parse()將json轉成js的格式
        prop.push(pass);
        localStorage.setItem('prop', JSON.stringify(prop));//將整個pictures做為一個string存入JSON.stringify(變數)
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}

function Event_enemy(pass){//儲存在事件中遇到的怪物
    if (typeof(Storage) !== "undefined") {
        // 使用LocalStorage存储图片数据，也可以使用SessionStorage
        var event_enemy = JSON.parse(localStorage.getItem('event_enemy')) || [];//JSON.parse()將json轉成js的格式
        event_enemy.push(pass);
        localStorage.setItem('event_enemy', JSON.stringify(event_enemy));//將整個pictures做為一個string存入JSON.stringify(變數)
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}

//記錄下冒險的過程
function Recond(word){
    let div_w = document.getElementById('recond')
    console.log(word);
    let p_w=document.createElement('p');
    p_w.innerHTML = word;
    div_w.appendChild(p_w);
}

function SaveData(pass) {
    // 检查本地存储是否可用
    if (typeof(Storage) !== "undefined") {
        // 使用LocalStorage存储图片数据，也可以使用SessionStorage
        var message = JSON.parse(localStorage.getItem('message')) || [];//JSON.parse()將json轉成js的格式
        message.push(pass);
        localStorage.setItem('message', JSON.stringify(message));//將整個pictures做為一個string存入JSON.stringify(變數)
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}
function Break_Down_Enemy(monsterName) {
    if (typeof(Storage) !== "undefined") {
      let BDE = JSON.parse(localStorage.getItem('BDE')) || {};//因為要用dict去紀錄
      if (monsterName in BDE) {
        // 如果怪物名稱已經存在,則將擊倒次數加一
        BDE[monsterName]++;
      } else {
        // 如果怪物名稱不存在,則創建一個新的鍵值對,初始擊倒次數為 1
        BDE[monsterName] = 1;
      }
      localStorage.setItem('BDE', JSON.stringify(BDE));
    }
  }
function Damge(pass){//計算總傷害量
    if(localStorage.getItem('damge')){
        let value = localStorage.getItem('damge');
        value = parseInt(value,10)
        value += pass;
        //注意!!! localStorage 只能存儲字符串
        localStorage.setItem('damge',value.toString());
        return
    }
    else
        localStorage.setItem('damge',pass.toString());
}
function HpLoss(pass){//計算總受傷害量
    if(localStorage.getItem('hpLoss')){
        let value = localStorage.getItem('hpLoss');
        value = parseInt(value,10)
        value += pass;
        //注意!!! localStorage 只能存儲字符串
        localStorage.setItem('hpLoss',value.toString());
        return
    }
    else
        localStorage.setItem('hpLoss',pass.toString());
}
function LoadData() {
    // 检查本地存储是否可用
    if (typeof(Storage) !== "undefined") {
        var message = JSON.parse(localStorage.getItem('message')) || [];
        for(let i = 0;i<message.length; i++){
            Recond(message[i]);
        }
    }
    if (typeof(Storage) !== "undefined") {
        var L_character = JSON.parse(localStorage.getItem('character')) || [];
        character = L_character[L_character.length - 1];
        document.getElementById("Hp").innerHTML = "Hp: "+character.hp;
        document.getElementById("Atk").innerHTML = "Atk: "+character.atk;
        document.getElementById("Def").innerHTML = "Def: "+character.def;
    }
    // if (typeof(Storage) !== "undefined") {
    //     let prop = JSON.parse(localStorage.getItem('prop')) || {};
    //     let div = document.getElementById("props");
    //     for (let item in prop) {
    //         let itemData = prop[item];
    //         let img = document.createElement("img");
    //         img.setAttribute("src", itemData.pic);
    //         // img.setAttribute("onclick", "UseItem()"); // 如果 UseItem 函數存在,請取消註釋
    //         div.appendChild(img);
    //         let counter = document.createElement("div");
    //         counter.setAttribute("class", "counter");
    //         counter.textContent = itemData.number;
    //         div.appendChild(counter);
    //     }
    // }
    document.getElementById("more").addEventListener("mouseenter", function(event) {
        const info = " hit: " + character.hit + " AGI: " + character.AGI ;
        const infoBox = document.getElementById("more_box");
        infoBox.textContent = info;
        infoBox.style.display = "block";
        infoBox.style.left = event.pageX + "px";
        infoBox.style.top = event.pageY + "px";
    });

    document.getElementById("more").addEventListener("mousemove", function(event) {
        const infoBox = document.getElementById("more_box");
        infoBox.style.left = event.pageX + "px";
        infoBox.style.top = event.pageY + "px";
    });

    document.getElementById("more").addEventListener("mouseleave", function() {
        const infoBox = document.getElementById("more_box");
        infoBox.style.display = "none";
    });
    
}
function Remove(){
    localStorage.removeItem('message');
    // localStorage.removeItem('event_enemy');
    // localStorage.removeItem('character');
}
function Remove_c(){
    localStorage.removeItem('character');
}
function Remove_All(){
    localStorage.removeItem('message');
    localStorage.removeItem('event_enemy');
    localStorage.removeItem('character');
    localStorage.removeItem('damge');
    localStorage.removeItem('hpLoss');
    localStorage.removeItem('BDE');
}
function Remove_e(){
    localStorage.removeItem('event_enemy');
}
//將因為切頁而被斷掉的補回去
function Go_battle(where) {//where 1洞窟 2森林 3草園
    let diceRoll = localStorage.getItem('dice');
    console.log(diceRoll);
    localStorage.removeItem('dice');//才會讓每次的直都是所要的
    if (JSON.parse(localStorage.getItem('event_enemy'))) {
        let name = JSON.parse(localStorage.getItem('event_enemy'));
        console.log(name);
        Event_enemy(name,where);
    }
    else{
        Enemy(diceRoll,where);
    }
    document.getElementById("red_light").style.display = "none";
    Feekback(diceRoll);
    LoadData();
    //對圖片添加鼠標偵測("要偵測什麼",執行什麼函數)
    document.getElementById("monster").addEventListener("mouseenter", function(event) {
        const info = nowEnemy.name + " HP: " + nowEnemy.hp + " ATK: " + nowEnemy.atk + " DEF: " + nowEnemy.def+" hit: " + nowEnemy.hit + " AGI: " + nowEnemy.AGI;
        const infoBox = document.getElementById("info_box");
        infoBox.textContent = info;
        infoBox.style.display = "block";
        infoBox.style.left = event.pageX + "px";
        infoBox.style.top = event.pageY + "px";
    });

    document.getElementById("monster").addEventListener("mousemove", function(event) {
        const infoBox = document.getElementById("info_box");
        infoBox.style.left = event.pageX + "px";
        infoBox.style.top = event.pageY + "px";
    });

    document.getElementById("monster").addEventListener("mouseleave", function() {
        const infoBox = document.getElementById("info_box");
        infoBox.style.display = "none";
    });
}

function Go_Event(where){
    let diceRoll = localStorage.getItem('dice');
    localStorage.removeItem('dice');//才會讓每次的直都是所要的
    if(diceRoll<=10){
        //幸運事件
        Normal(1,where);
    }
    else{
        Normal(0,where);
    }
    Feekback(diceRoll);
    LoadData();
}

function TheEnd(){
    let damge = localStorage.getItem("damge");
    document.getElementById("total_damge").innerHTML="總共對敵人造成: "+damge+"傷害";
    let hpLoss = localStorage.getItem("hpLoss");
    document.getElementById("total_hpLoss").innerHTML="總共承受: "+hpLoss+"傷害";
    if (typeof(Storage) !== "undefined") {
        var message = JSON.parse(localStorage.getItem('message')) || [];
        for(let i = 0;i<message.length; i++){
            Recond(message[i]);
        }
        Recond("你的旅途在此畫下了句點。");
    }
    let BDE = JSON.parse(localStorage.getItem("BDE"))|| [];    
    let bde = document.getElementById("BDE")
    let BDE_word=document.createElement('p');
    BDE_word.innerHTML = "已擊倒敵人數量";
    bde.appendChild(BDE_word)
    for (let name in BDE){
        let BDE_word=document.createElement('p');
        BDE_word.innerHTML = name + BDE[name];
        bde.appendChild(BDE_word)
    }
    Remove_All()
}

function Out(){
    Remove_All()
    window.close();
}
// window.onbeforeunload = function() {
//     // 在此處添加您想要執行的操作
//     Remove_All()
//     console.log('視窗即將關閉');
//   };