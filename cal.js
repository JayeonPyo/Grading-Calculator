var myRank_result;//내등급
var middleRank_result;//중간석차
var Rank_result;//평균등급
var sub;//과목명
var Rank;//석차
var SameRank;//동석차
var listener;//이수자
var num;//단위
var num_Rank_sum;//과목별 '단위수*석차등급'의 합
var num_sum;//이수단위 총합
var inner;//결과를 띄울때 
//var compare_sub;//비교할 과목
//var compare_num;//비교할 등급
var want;//원하는 등급 리스트

function cal(){
    var list = document.getElementsByTagName("input");
    for(var i = 0; i < list.length;i+=5){//과목의 개수
        //석차,동석차,이수자,단위 구분
        myRank_result = null;
        middleRank_result =null;

            sub = list[i].value;
            Rank = parseInt(list[i+1].value);
            SameRank = parseInt(list[i+2].value);
            listener = parseInt(list[i+3].value);
            num = parseInt(list[i+4].value);
            //동석차가 있는지 판단
            if(SameRank>1){
                middleRank();
            }else{
                myRank();
            }
            
            //전체 평균등급 구하기 위한 계산
            //num_Rank_sum += num*Rank;
            //num_sum += num;
            
            //다른 화면에 띄우기 위해서 내용 저장
            create();
            //원하는 등급과 자신의 등급 비교
            compare();
        }
        //평균등급 계산
        //Rank();
    }
    function myRank(){
    myRank_result = (Rank/listener)*100;
    if(myRank_result<4){
        myRank_result = 1
    }else if(myRank_result<11){
        myRank_result = 2
    }else if(myRank_result<23){
        myRank_result = 3
    }else if(myRank_result<40){
        myRank_result = 4
    }else if(myRank_result<60){
        myRank_result = 5
    }else if(myRank_result<77){
        myRank_result = 6
    }else if(myRank_result<89){
        myRank_result = 7
    }else if(myRank_result<96){
        myRank_result = 8
    }else{
        myRank_result = 9
    }
}
function middleRank(){
    middleRank_result = (((SameRank - 1)/2+Rank)/listener)*100;
    if(middleRank_result<4){
        middleRank_result = 1
    }else if(middleRank_result<11){
        middleRank_result = 2
    }else if(middleRank_result<23){
        middleRank_result = 3
    }else if(middleRank_result<40){
        middleRank_result = 4
    }else if(middleRank_result<60){
        middleRank_result = 5
    }else if(myRank_result<77){
        middleRank_result = 6
    }else if(middleRank_result<89){
        middleRank_result = 7
    }else if(middleRank_result<96){
        middleRank_result = 8
    }else{
        middleRank_result = 9
    }
}
//function Rank(){//총 평균등급[마지막에 추가하자]
//    Rank_result = num_Rank_sum/num;
//}
function create(){
    if(SameRank>1){
        inner += "*"+sub+"_subjects_are_grade_"+middleRank_result+"/";
    }else{
        inner += "*"+sub+"_subjects_are_grade_"+myRank_result+"/";
    }
}
function compare(){
    var i = 1; 
    var check = 0;
    for(; i<compare_sub.length;i++){
        if(sub == compare_sub[i]){
            check += 1;
            break;
        }
    }
    if(check){
        var tem = parseInt(compare_num[i]);
        if(SameRank>1){
            alert(middleRank_result)
            if(middleRank_result < tem){
                var sum = tem-middleRank_result
                inner += sub+"_subjects_are_"+sum+"_grade_higher_than_desired//";
            }else if(middleRank_result == tem){
                inner += sub+"_subjects_are_the_same_as_the_desired_level//";
            }
            else{
                var sum = middleRank_result-tem
                inner += sub+"_subjects_are_"+sum+"_grade_lower_than_desired//";
            }
        }else{
            if(myRank_result < tem){
                var sum=tem-myRank_result
                inner += sub+"_subjects_are_"+sum+"_grade_higher_than_desired//";
            }else if(myRank_result == tem){
                inner += sub+"_subjects_are_the_same_as_the_desired_level//";
            }
            else{
                var sum = myRank_result-tem
                inner += sub+"_subjects_are_"+sum+"_grade_lower_than_desired//";
            }
        }
        
    }
}
function print(){
    console.log(inner);
    inner = inner.split("*");
    for(var i = 1; i < inner.length;i++){
        var j = 10
        inner[i] = inner[i].replace("/","<br>");
        inner[i] = inner[i].replace("//","<br><br>");
        document.getElementById("result").innerHTML += inner[i];
    }
}