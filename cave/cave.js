//此區域的怪物
//[名稱,血量,攻擊力,特殊能力,迴避率,命中率,逃跑成功率,圖片位置]
let boss = [
    {"name":'從黑暗中出來的絕望',"hp":1200,"atk":100,"def":50,"AGI":50,"skl":'每回合一定有50%機率使對手產生恐懼(攻擊、命中下降)',"hit":80,"run":10,"src":"../picture/monster/cave/boss/boss_cave.jpg"},
    {"name":'黑暗中的黎明',"hp":1500,"atk":80,"def":100,"AGI":30,"skl":'',"hit":80,"run":20,"src":"../picture/monster/cave/boss/Li_Mingqing.png"},
];
let normal = [
{"name":"鹽石巨靈","hp":400,"atk":30,"def":45,"AGI":0,"hit":50,"run":90,"src":"../picture/monster/cave/normal/Naclstack.png"},
{"name":"進擊的青蛙","hp":200,"atk":40,"def":20,"AGI":30,"hit":80,"run":60,"src":"../picture/monster/cave/normal/frog.png"},
{"name":"古代機械","hp":500,"atk":50,"def":50,"AGI":20,"hit":80,"run":50,"src":"../picture/monster/cave/normal/Ancient_Mechanical_Giant.png"},
{"name":"青熊獸","hp":350,"atk":35,"def":40,"AGI":40,"hit":70,"run":60,"src":"../picture/monster/cave/normal/Blue_bear.png"},
{"name":"腦無","hp":450,"atk":40,"def":40,"AGI":20,"hit":70,"run":50,"src":"../picture/monster/cave/normal/Brainless.png"},
{"name":"哥布林小隊","hp":250,"atk":30,"def":20,"AGI":40,"hit":65,"run":40,"src":"../picture/monster/cave/normal/goblins.png"},
{"name":"無頭騎士","hp":350,"atk":35,"def":35,"AGI":35,"hit":75,"run":50,"src":"../picture/monster/cave/normal/Headless_Knight.png"},
{"name":"地底蟲","hp":200,"atk":30,"def":10,"AGI":50,"hit":70,"run":40,"src":"../picture/monster/cave/normal/sandworms.png"},
{"name":"骷髏戰士","hp":300,"atk":35,"def":40,"AGI":10,"hit":50,"run":70,"src":"../picture/monster/cave/normal/skull.png"},
];
let easy = [
{"name":"蝙蝠","hp":120,"atk":15,"def":10,"AGI":50,"hit":70,"run":70,"src":"../picture/monster/cave/easy/bat.png"},
{"name":"蜥蜴人","hp":150,"atk":30,"def":10,"AGI":60,"hit":70,"run":40,"src":"../picture/monster/cave/easy/Meleon.png"},
{"name":"老鼠","hp":100,"atk":10,"def":10,"AGI":30,"hit":70,"run":70,"src":"../picture/monster/cave/easy/mouse.png"},
{"name":"史萊姆","hp":120,"atk":15,"def":20,"AGI":10,"hit":80,"run":90,"src":"../picture/monster/cave/easy/Slime.png"},
{"name":"蜘蛛","hp":150,"atk":20,"def":10,"AGI":30,"hit":80,"run":50,"src":"../picture/monster/cave/easy/spider.png"},
{"name":"殭屍","hp":200,"atk":25,"def":20,"AGI":0,"hit":70,"run":80,"src":"../picture/monster/cave/easy/zombies.png"},
];
//此區的事件
//{事件圖片,事件敘述,事件同意,事件拒絕,事件影響}
let normal_event =[
{"pic":"../picture/event/cave/campfire.jpg","narrate":"發現某人所留下的營地，要在此地休息嗎?","agree":"休息","reject":"繼續前行","a_effect":"回血","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/campfire_rest.jpg","agree_message":"經過一翻的休息後，你感覺受的傷都好了","reject_pic":"../picture/event/cave/donot_rest.png","reject_message":"你覺得自己還能前進不需要休息"},
{"name":"掠奪者","pic":"../picture/event/cave/wall.png","narrate":"從牆壁的另一端傳來了聲響...","agree":"停下來察看","reject":"快速離去","a_effect":"遭遇戰鬥","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/break_wall.jpg","agree_message":"一張臉從牆壁探了進來...","reject_pic":"../picture/event/cave/look_back.png","reject_message":"雖然快步離去了，但那聲音一直從後方傳來，另你在意不已"},
{"pic":"../picture/event/cave/mushroom.png","narrate":"前方出現香菇怪，看起來沒有威脅性","agree":"打倒，煮來吃","reject":"避開它，繼續前行","a_effect":"屬性增加","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/mushroom_breakdown.png","agree_message":"你輕鬆打倒它，並料理\n吃完後你覺得你的身體好像更強壯了","reject_pic":"../picture/event/cave/mushroom.png","reject_message":"它似乎注意到你，揮手向你道別"},
{"name":"骷髏王","pic":"../picture/event/cave/skull_king.png","narrate":"眼前出現人影，往右方奔去","agree":"追上去，一看究竟","reject":"很可疑，不理它","a_effect":"繼續前行","r_effect":"遭遇戰鬥",
"agree_pic":"../picture/event/cave/skull_king_agree.png","agree_message":"怎麼有人喜歡這樣玩啊\n以更快的速度逃離你的視線範圍","reject_pic":"../picture/event/cave/skull_king_reject.png","reject_message":"算你倒楣，我就愛這樣玩"},
{"pic":"../picture/event/cave/water.png","narrate":"前方有一杯水，是山洞滴水積成的嗎?","agree":"正好口渴，喝了","reject":"很可疑","a_effect":"命中和迴避降低","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/water_agree.png","agree_message":"這是......喉嚨快要灼傷了","reject_pic":"../picture/event/cave/water_reject.png","reject_message":"竟然可以燃燒，還好沒喝"},
{"pic":"../picture/event/cave/campfire.jpg","narrate":"發現某人所留下的營地，要在此地休息嗎?","agree":"休息","reject":"繼續前行","a_effect":"回血","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/campfire_rest.jpg","agree_message":"經過一翻的休息後，你感覺受的傷都好了","reject_pic":"../picture/event/cave/donot_rest.png","reject_message":"你覺得自己還能前進不需要休息"},
    
];
let luck_event=[
{"pic":"../picture/event/cave/ring.jpg","narrate":"發現一枚散發著光芒的戒指，裏頭似乎有著強大的力量","agree":"撿起戒指","reject":"無視它","a_effect":"屬性增加","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/grow_up.png","agree_message":"戒指中的力量竄入你的身體","reject_pic":"../picture/event/cave/not_ok.png","reject_message":"你覺得有些可疑，決定無視它"},
{"pic":"../picture/event/cave/campfire.jpg","narrate":"發現某人所留下的營地，要在此地休息嗎?","agree":"休息","reject":"繼續前行","a_effect":"回血","r_effect":"繼續前行",
"agree_pic":"../picture/event/cave/campfire_rest.jpg","agree_message":"經過一翻的休息後，你感覺受的傷都好了","reject_pic":"../picture/event/cave/donot_rest.png","reject_message":"你覺得自己還能前進不需要休息"},
        
];
let event_monster = {
    "掠奪者":{"name":"掠奪者","hp":450,"atk":50,"def":40,"AGI":30,"hit":70,"run":40,"src":"../picture/monster/cave/event/predator.png"},
    "骷髏王":{"name":"骷髏王","hp":550,"atk":55,"def":35,"AGI":20,"hit":30,"run":40,"src":"../picture/monster/cave/event/skull_king.png"},
};


function get_B(a){
    let B = document.getElementById(a);
    return B
}
function del_W(a){
    let B = document.getElementById(a);
    B.innerHTML = '';
}
//投擲骰子確認行動(0~99)，99是最糟的情況
//用來判斷是遇到什麼行動
function Action(){
    let dice_result = 97;//Math.floor(Math.random()*99)+1;
    Feekback(dice_result);
    Recond("投出"+dice_result+"點");
    SaveData("投出"+dice_result+"點");
    //將出來的值儲存起來(因位置後會切頁)
    localStorage.setItem('dice', dice_result);
    //關於switch的比較方式，可以在switch設true這樣只要case的條件true就會執行了
    switch(true){
        case dice_result <= 50:
            //遭遇一般事件
            location.href='event_cave.html';
            console.log("事件");
            break;
        case dice_result <= 99:
            //遭遇戰鬥
            location.href='battle_cave.html';
            console.log("遇到戰鬥");
            break;
    }
}
