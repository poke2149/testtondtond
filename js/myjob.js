let dduck = 0;
let adven = 0;
let hands = 0;
let kind = 0;
let strong = 0;
let sincere = 0;

var count = 0;

var obj = document.getElementById("str-question");

let str_complate =[
    "뚝딱이","탐험이","멋쟁이","친절이","씩씩이","성실이"
]
let str_index = [
    "1.친구와 함께 운동하는 것을 좋아한다.",
    "2.수학문제를 잘 푼다.",
    "3.친구에 비하여 별난 생각을 많이 한다.",
    "4.나보다 어려운 사람을 도와주는 것을 좋아한다.",
    "5.소풍이나 학급행사에 사회 보는 것을 좋아한다.",
    "6.친구와의 약속 시간을 잘 지킨다.",
    "7.도구와 연장을 잘 다루는 편이다.",
    "8.호기심이 많아 관찰하는 것을 좋아한다.",
    "9.들기와 그림을 잘 그리는 손재주가 있다.",
    "10.다른 친구의 어려움과 아픔을 보면 도와주고 싶다.",
    "11.사람들과 대화하는 것을 좋아한다.",
    "12.성격이 꼼꼼한 편이다.",
    "13.조립용 로봇이나 비행기를 잘 만든다. ",
    "14.책을 빨리 읽는 편이다.",
    "15.글짓기를 잘 하는 편이다.",
    "16.스스로 봉사하는 시간이 즐겁다.",
    "17.학급 임원을 하는 것이 재미있다.",
    "18.준비물을 잊지 않고 챙겨간다."
];

function init(){
    obj.innerText = str_index[count];
}

init();

// 마우스 클릭
function checklist(num){
    if(num == 0){
        if(count == 17){
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            resultVal(num);
            obj.innerText = str_index[count];
        }
    }
    else if(num == 1){
        if(count == 17){
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            resultVal(num);
            obj.innerText = str_index[count];
        }
    }
    else if(num == 2){
        if(count == 17)
        {
            clearwindows();
            complatedCheck();
        }
        else{
            count++;
            obj.innerText = str_index[count];
        }
    }
    console.log(dduck,adven,hands,kind,strong,sincere);
}
// 점수 result값
function resultVal(num){
    switch(num)
    {
        case 0:
            if (obj.innerText == str_index[0]
                || obj.innerText == str_index[6]
                || obj.innerText == str_index[12]) {
                dduck += 3;
            }
            else if (obj.innerText == str_index[1]
                || obj.innerText == str_index[7]
                || obj.innerText == str_index[13]) {
                adven += 3;
            }
            else if (obj.innerText == str_index[2]
                || obj.innerText == str_index[8]
                || obj.innerText == str_index[14]) {
                hands += 3;
            }
            else if (obj.innerText == str_index[3]
                || obj.innerText == str_index[9]
                || obj.innerText == str_index[15]) {
                kind += 3;
            }
            else if (obj.innerText == str_index[4]
                || obj.innerText == str_index[10]
                || obj.innerText == str_index[16]) {
                strong += 3;
            }
            else if (obj.innerText == str_index[5]
                || obj.innerText == str_index[11]
                || obj.innerText == str_index[17]) {
                sincere += 3;
            }
            break;
        case 1:
            if (obj.innerText == str_index[0]
                || obj.innerText == str_index[6]
                || obj.innerText == str_index[12]) {
                dduck += 1;
            }
            else if (obj.innerText == str_index[1]
                || obj.innerText == str_index[7]
                || obj.innerText == str_index[13]) {
                adven += 1;
            }
            else if (obj.innerText == str_index[2]
                || obj.innerText == str_index[8]
                || obj.innerText == str_index[14]) {
                hands += 1;
            }
            else if (obj.innerText == str_index[3]
                || obj.innerText == str_index[9]
                || obj.innerText == str_index[15]) {
                kind += 1;
            }
            else if (obj.innerText == str_index[4]
                || obj.innerText == str_index[10]
                || obj.innerText == str_index[16]) {
                strong += 1;
            }
            else if (obj.innerText == str_index[5]
                || obj.innerText == str_index[11]
                || obj.innerText == str_index[17]) {
                sincere += 1;
            }
            break;
        default:
            alert("error!!");
            break;
    }
}
function complatedCheck(){
    var maxValueArr = [dduck , adven, hands,kind,strong,sincere];
    var max = Math.max.apply(null,maxValueArr);

    switch(max){
        case dduck:
            obj.innerText = str_complate[0];
            break;
        case adven:
            obj.innerText = str_complate[1];
            break;
        case hands:
            obj.innerText = str_complate[2];
            break;
        case kind:
            obj.innerText = str_complate[3];
            break;
        case strong:
            obj.innerText = str_complate[4];
            break;
        case sincere:
            obj.innerText = str_complate[5];
            break;
    }
}
function clearwindows(){
    document.getElementById("clickchoice-yes").remove();
    document.getElementById("clickchoice-maybe").remove();
    document.getElementById("clickchoice-no").remove();
}