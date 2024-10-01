//是在什麼地方
let href = ["cave.html","forest.html","glassground.html"];
let place;
//戰鬥敵人強度
function Enemy(dice,where){
    console.log(dice);
    let dice_result;
    place = href[where-1];
    switch(where){
        case 1:
            dice_result = ((dice-50)/50);//50是洞窟的遇敵率
        case 2:
            dice_result = ((dice-30)/70);
        case 3:
            dice_result = ((dice-70)/30);
    }
    document.getElementById('h1').innerHTML = '遭遇敵人';
    console.log(dice_result);
    switch(true){
        case dice_result<= 0.3:
            Enemy_name("easy");
            //弱怪
            break;
        case dice_result < 0.9:
            //一般敵人
            Enemy_name("normal");
            break;
        case dice_result <= 1:
            //出現頭目
            Enemy_name("boss");
            let bgm = document.getElementById("bgm");
            bgm.setAttribute("src","../music/battle_boss.mp3");
            bgm.play();
            break;         
    }
}
let nowEnemy ;//現在所面對道的敵人是
let enemyHp ;
let take_def ;//是否採取防禦;
let SMR = 0;//敵人是否要放大招
function Enemy_name(enemy){
    // let dice = Math.floor(Math.random() * 10);//選擇敵人清單中的哪一個
    switch (enemy){
        case 'boss':
            let dice_b = Math.floor(Math.random() * boss.length);
            nowEnemy = boss[dice_b];
            document.getElementById('monster').setAttribute('src',nowEnemy.src);
            document.getElementById('monster').setAttribute('alt','boss');
            document.getElementById('narrate1').innerHTML = "Boss出現拉!!!";
            enemyHp = nowEnemy.hp;
            break;
        case 'normal':
            let dice_n = Math.floor(Math.random() * normal.length)
            nowEnemy = normal[dice_n];
            document.getElementById('monster').setAttribute('src',nowEnemy.src);
            document.getElementById('monster').setAttribute('alt','monster');
            document.getElementById('narrate1').innerHTML = "遭遇怪物!!!";
            enemyHp = nowEnemy.hp;
            break;
        case 'easy':
            let dice_e = Math.floor(Math.random() * easy.length)
            nowEnemy = easy[dice_e];
            document.getElementById('monster').setAttribute('src',nowEnemy.src);
            document.getElementById('monster').setAttribute('alt','monster');
            document.getElementById('narrate1').innerHTML = "遭遇怪物!!!";
            enemyHp = nowEnemy.hp;
            break;
    }
    document.getElementById('narrate2').innerHTML = nowEnemy.name;
    get_B('narrate2').style.color = 'red';
    SaveData("遭遇到"+nowEnemy.name);
}

function Event_enemy(enemy,where){
    place = href[where-1];
    nowEnemy = event_monster[enemy];
    console.log(nowEnemy);
    document.getElementById('monster').setAttribute('src',nowEnemy.src);
    document.getElementById('monster').setAttribute('alt','enemy');
    document.getElementById('narrate1').innerHTML = "遭遇敵人!!!";
    enemyHp = nowEnemy.hp;
    document.getElementById('narrate2').innerHTML = nowEnemy.name;
    get_B('narrate2').style.color = 'red';
    SaveData("遭遇到"+nowEnemy.name);
    Remove_e();
}

function Battle(){
    let hid = get_B('button1');
    hid.style.display = 'none';//隱藏戰鬥按鈕
    document.getElementById('h1').innerHTML = '戰鬥';
    let hp = document.getElementById('hp_line');
    hp.style.display = 'inline';
    let atk = get_B('attack');
    atk.style.display = 'inline';
    let def = get_B('defense');
    def.style.display = 'inline';
    let run = get_B('run_away');
    run.style.display = 'inline';
    //在設定函數時，不能隨意的加上()，因為加上()會直接進行執行，不加 才會是指向那個函數
    document.getElementById('narrate1').innerHTML = '';
    document.getElementById('narrate2').innerHTML = '';
    Recond('進入戰鬥');
    SaveData('進入戰鬥');
}
function Attack(){
    let hit = Math.floor(Math.random()*100)//Dice();
    Feekback(hit);
    console.log(hit);
    let temp;
    take_def = 1;
    let damage;
    //爆擊
    if (hit >= character.chit){
        damage = Math.round((character.atk*2-nowEnemy.def)/2);
        temp = Damage_calculation(damage,1,hit);
    }
    else if (hit <= nowEnemy.AGI-character.hit){//攻擊沒有命中  
        document.getElementById('message').innerHTML = 'Miss';
        Recond("投出"+hit+"點，"+'攻擊miss');
        SaveData("投出"+hit+"點，"+'攻擊miss');
    }
    else{
        damage = Math.round((character.atk-nowEnemy.def)/2);
        temp = Damage_calculation(damage,0,hit);
    }
    setTimeout(function(){
        get_B('message').innerHTML = '';
    },1000);//可以讓期延緩消失，之後可以考慮加上移消失動畫
    if(temp == 0){
        setTimeout(Victory,1000);
        return ;
    }
    setTimeout(ENM,1000);
};
function Defense(){
    document.getElementById('message').innerHTML = '在下次開始前受到傷害減輕';
    Recond('選擇防禦，在下次開始前受到傷害減輕');
    SaveData('選擇防禦，在下次開始前受到傷害減輕');
    take_def = 0.2;//獲得80%防禦
    setTimeout(function(){
        get_B('message').innerHTML = '';
    },1000);//可以讓期延緩消失，之後可以考慮加上移消失動畫
    ENM();
};
function Run_away(){
    take_def =1;
    let run = Math.floor(Math.random()*100);
    Feekback(run);
    if(run<nowEnemy.run){
        Recond("投出"+run+"點\n"+"逃跑成功");
        SaveData("投出"+run+"點\n"+"逃跑成功");
        document.getElementById("h1").innerHTML = "逃跑成功";
        get_B('hp_line').style.display = 'none';
        get_B('attack').style.display = 'none';
        get_B('defense').style.display = 'none';
        get_B('run_away').style.display = 'none';
        get_B('monster').setAttribute('src','../picture/run_away.png');
        get_B('button1').style.display = 'inline';
        get_B('button1').setAttribute('value', '繼續');

        get_B('button1').setAttribute('onclick', onclick='javascript:location.href="' + place + '"');
        document.getElementById('bgm').pause();
        document.getElementById("red_light").style.display = "none";
    }
    else{
        Recond("投出"+run+"點 "+"逃跑失敗\n站不穩腳步");
        SaveData("投出"+run+"點 "+"逃跑失敗\n站不穩腳步");
        ENM();
    }
};
function Damage_calculation( damage, critical_hit,hit){
    if (damage<=0){
        damage = 1;
    }
    if(critical_hit){
        Recond("投出"+hit+"點，爆擊!\n "+'造成'+damage+'傷害');
        SaveData("投出"+hit+"點，爆擊!\n "+'造成'+damage+'傷害');
        document.getElementById('message').innerHTML = '造成'+damage+'點爆擊傷害';
    }
    else{
        Recond("投出"+hit+"點\n "+'造成'+damage+'傷害');
        SaveData("投出"+hit+"點\n "+'造成'+damage+'傷害');
        document.getElementById('message').innerHTML = '造成'+damage+'點傷害';
    }
    enemyHp -= damage;
    Damge(damage);
    console.log(enemyHp);
    if (enemyHp <= 0){
        get_B('hp_line').style.width = "0";
        return 0;
    }
    let hp_length = 400;//hp的長度
    hp_length *= (enemyHp / nowEnemy.hp);
    get_B('hp_line').style.width = hp_length.toString()+'px';
    return;
}


function ENM(){//emeny next move
    if(SMR == 0)
        EDC();
    else
        SM();
}

function EDC(){//敵人傷害計算
    let hit = Math.floor(Math.random()*100);
    Feekback(hit);
    Recond("敵人投出"+hit+"點");
    SaveData("敵人投出"+hit+"點");
    if(hit<character.AGI-nowEnemy.hit){
        document.getElementById('message').innerHTML = 'Miss';
        Recond("你迴避掉敵人攻擊");
        SaveData("你迴避掉敵人攻擊");
        setTimeout(function(){
            get_B('message').innerHTML = '';
        },1000);//可以讓期延緩消失，之後可以考慮加上移消失動畫
        return
    }
    let damage = Math.round(((nowEnemy.atk-character.def)/2)*take_def);
    if (damage<=0){
        damage = 1;
    }
    document.getElementById('message').innerHTML = "你受到"+damage+"傷害";
    document.getElementById('message').style.color = "red";
    setTimeout(function(){
        get_B('message').innerHTML = '';
        document.getElementById('message').style.color = "white";
    },1000);//可以讓期延緩消失，之後可以考慮加上移消失動畫
    character.hp -= damage;
    document.getElementById('Hp').innerHTML = "Hp: "+character.hp;
    Recond("你受到"+damage+"傷害");
    SaveData("你受到"+damage+"傷害");
    HpLoss(damage);
    YouDied(character.hp);//判斷你死了嗎?
    //敵人是否要放大招，會在下回合施放
    if(hit<=20){
        SMR = 1;
        setTimeout(function(){
        document.getElementById("red_light").style.display = "inline";
        document.getElementById('message').innerHTML = nowEnemy.name+"準備施放大招";
        document.getElementById('message').style.color = "red";
        Recond(nowEnemy.name+"準備施放大招");
        SaveData(nowEnemy.name+"準備施放大招");
         },1000);
         setTimeout(function(){
            get_B('message').innerHTML = '';
            document.getElementById('message').style.color = "white";
        },2000);
    }
}

function SM (){//special move 放大招的地方
    let damage = Math.round((((nowEnemy.atk*3)-character.def)/2)*take_def);
    if (damage<=0){
        damage = 1;
    }
    document.getElementById('message').innerHTML = "你受到"+damage+"傷害";
    document.getElementById('message').style.color = "red";
    setTimeout(function(){
        get_B('message').innerHTML = '';
        document.getElementById('message').style.color = "white";
    },1000);//可以讓期延緩消失，之後可以考慮加上移消失動畫
    character.hp -= damage;
    document.getElementById('Hp').innerHTML = "Hp: "+character.hp;
    Recond("你受到"+damage+"傷害");
    SaveData("你受到"+damage+"傷害");
    HpLoss(damage);
    YouDied(character.hp);
    SMR = 0;
    document.getElementById("red_light").style.display = "none";
}
function YouDied(hp){
    if(hp<0){
        Recond("你已死亡");
        SaveData("你已死亡");
        document.getElementById('monster').setAttribute('src','../picture/died.jpg');
        localStorage.removeItem('character');
        setTimeout(function(){
            location.href='../leave.html';
        },2000);
    }
}

function Victory(){
    get_B('h1').innerHTML = '勝利';
    get_B('narrate1').innerHTML = nowEnemy.name;
    get_B('narrate1').style.color = 'red';
    get_B('narrate2').innerHTML = '已被擊敗';
    get_B('narrate2').style.color = 'white';
    get_B('hp_line').style.display = 'none';
    get_B('attack').style.display = 'none';
    get_B('defense').style.display = 'none';
    get_B('run_away').style.display = 'none';
    get_B('monster').setAttribute('src','../picture/victory.jpg');
    get_B('button1').style.display = 'inline';
    get_B('button1').setAttribute('value', '結束');
    get_B('button1').setAttribute('onclick', onclick='javascript:location.href="' + place + '"');
    document.getElementById("red_light").style.display = "none";
    let v = document.getElementById('bgm');
    v.setAttribute("src",'../music/victory.mp3');
    v.play();
    Recond("戰鬥勝利");
    SaveData("戰鬥勝利");
    Remove_c();//要清掉舊的資料才不會發生問題
    SaveCharacter({"hp":character.hp,"atk":character.atk, "def":character.def, "hit":character.hit, "AGI":character.AGI,"maxHp":character.maxHp});
    Break_Down_Enemy(nowEnemy.name+": ");
}

function Enemy_info(){
    document.getElementById("info_box").style.display = "inline";
}