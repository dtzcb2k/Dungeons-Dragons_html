let href = ["cave.html","forest.html","glassground.html","battle_cave.html","battle_forest.html","battle_glassground.html"];
let place;
let fight;
let nowEvent;
//一般事件
function Normal(luck,where){
    place = href[where-1];
    fight = href[where+2];
    if(luck){
        let dice = Math.floor(Math.random()*luck_event.length);
        nowEvent = luck_event[dice];
    }
    else{
        let dice = Math.floor(Math.random()*normal_event.length);
        nowEvent = normal_event[dice];
    }
    document.getElementById("img").setAttribute("src",nowEvent.pic);
    document.getElementById("event_message").innerHTML = nowEvent.narrate;
    document.getElementById("button1").setAttribute("value",nowEvent.agree);
    document.getElementById("button2").setAttribute("value",nowEvent.reject);
    SaveData(nowEvent.narrate);
}
function Agree(){
    document.getElementById("img").setAttribute("src",nowEvent.agree_pic);
    document.getElementById("event_message").innerHTML= nowEvent.agree_message;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline";
    SaveData(nowEvent.agree_message);
    Recond(nowEvent.agree_message);
    switch (nowEvent.a_effect){
        case "回血":
            if(character.hp == character.maxHp){
                character.maxHp += 10;
            }
            character.hp = character.maxHp;
            Remove_c();//要清掉舊的資料才不會發生問題
            SaveCharacter({"hp":character.hp,"atk":character.atk, "def":character.def, "hit":character.hit, "AGI":character.AGI,"maxHp":character.maxHp})
            break;
        case "屬性增加":
            let up = Math.floor(Math.random()*5)+1;//不會選到hp
            let grow = Math.floor(Math.random()*19)+1;
            // console.log(up);
            // console.log(grow);
            document.getElementById("img")
            switch (up){
                case 1:
                    character.atk += grow;
                    SaveData(nowEvent.a_effect);
                    Recond(nowEvent.a_effect)
                    SaveData("攻擊增加了"+ grow);
                    Recond("攻擊增加了"+ grow)
                    break;
                case 2:
                    character.def += grow;
                    SaveData(nowEvent.a_effect);
                    Recond(nowEvent.a_effect)
                    SaveData("防禦增加了"+ grow);
                    Recond("防禦增加了"+ grow)
                    break;
                case 3:
                    character.hit += grow;
                    SaveData(nowEvent.a_effect);
                    Recond(nowEvent.a_effect)
                    SaveData("命中增加了"+ grow);
                    Recond("命中增加了"+ grow)
                    break;
                case 4:
                    character.AGI += grow;
                    SaveData(nowEvent.a_effect);
                    Recond(nowEvent.a_effect)
                    SaveData("迴避增加了"+ grow);
                    Recond("迴避增加了"+ grow)
                    break;
                case 5:
                    character.maxHp += grow;
                    character.hp+=grow;
                    SaveData(nowEvent.a_effect);
                    Recond(nowEvent.a_effect)
                    SaveData("生命上限增加了"+ grow);
                    Recond("生命上限增加了"+ grow)
                    break;
            }
            console.log(character);
            Remove_c();//要清掉舊的資料才不會發生問題
            SaveCharacter({"hp":character.hp,"atk":character.atk, "def":character.def, "hit":character.hit, "AGI":character.AGI,"maxHp":character.maxHp})
            break;
        case "命中和迴避降低":
            character.AGI -= 5;
            character.hit -= 5;
            Remove_c();//要清掉舊的資料才不會發生問題
            SaveCharacter({"hp":character.hp,"atk":character.atk, "def":character.def, "hit":character.hit, "AGI":character.AGI,"maxHp":character.maxHp})
            SaveData("命中和迴避降低"+ 5);
            Recond("命中和迴避降低"+ 5);
            break;
        case "遭遇戰鬥":
            Event_enemy(nowEvent.name);
            document.getElementById("button3").onclick = function() {
                location.href = fight;
            };
            document.getElementById("button3").value = "繼續";
            break;

    }
}
function Reject(){
    document.getElementById("img").setAttribute("src",nowEvent.reject_pic);
    document.getElementById("event_message").innerHTML= nowEvent.reject_message;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline";
    switch (nowEvent.r_effect){
        case "繼續前行":
            SaveData(nowEvent.reject_message);
            Recond(nowEvent.reject_message);
            document.getElementById("button3").value = "繼續";
            document.getElementById("button3").onclick = function() {
                location.href = place;
            };
            break;
        case "遭遇戰鬥":
            Event_enemy(nowEvent.name);
            document.getElementById("button3").onclick = function() {
                location.href = fight;
            };
            document.getElementById("button3").value = "繼續";
            break;
    }
}