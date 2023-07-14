// var redCup = 10;
// var Bluecup =20;
// var whiteCup = 0;

// document.write("변경 전 빨간컵 : "+redCup+" 파란컵 : "+blueCup+"<br>");

// whiteCup = redCup;
// redCup = blueCup ;
// blueCup = whiteCup;

// document.write("변경 후 빨간컵 : "+redCup+" 파란컵 : "+blueCup+"");





// var jin = 0;
// var red = 1;
// var blue = 2;
// var yellow = 3;
// var green = 4;

// jin = red;
// document.write("변경 전 :" + jin + "<br>");

// jin = green;
// document.write("변경 후 :" + jin );






// var tall = 150;
// if(tall >= 140){
//     document.write("바이킹 탑승");
// }
// else{
//     document.write("바이킹 탑승 불가");
// }

// var score = 80;
// if(score >= 60){
//     document.write("합격");
// }else{
//     document.write("불합격");
// }

// document.write("<br><br>")






// var speed = Number(prompt("자동차 속도"));

// if( speed > 70){
//     document.write("과속입니다.");
// }else{
//     document.write("정상 속도입니다.");
// }







// var grade = Number(prompt("성적을 입력하세요."));

// if ( grade >= 90 ){
//     document.write("A등급입니다.");
// }else if ( grade >= 80 ){ 
//     document.write("B등급입니다.");
// }else if ( grade >= 70 ){
//     document.write("C등급입니다.");
// }else{
//     document.write("F등급입니다.");
// }







// var area = prompt("위치를 입력하세요(중구,서구,동구)");

// var tip = 0;

// if( area == "서구"){
//     tip = 1000;
// }else if( area == "동구"){
//     tip = 2000;
// }
// document.write("배달료는" + tip + "원 입니다.");


//           또는


// if ( area == "중구" ){
//     document.write("배달료는 0원 입니다.");
// }else if ( area == "서구" ){
//     document.write("배달료는 1000원 입니다.");
// }else{
//     document.write("배달료는 2000원 입니다.");
// }








// var num = Math.floor(Math.random()*10) + 1 ;      
// // 랜덤 숫자에서 정수 부분( 1 ~ 10)만 가져옴. 가장 작은 숫자 더해줌. 큰 수에서 작은 수 빼고 1 더해준 값을 곱해줌.

// document.write( num );




// 동전 맞추기 , 1 - 앞면, 2- 뒷면

// var coin = Math.floor(Math.random()*2)+1;

// var user = prompt("1.앞면   2.뒷면");

// if( isNaN(user) ){                         // isNaN 함수는 숫자로 변환이 가능한 경우 거짓, 숫자로 변환이 불가능한 경우 참
//     alert("숫자만 입력하세요");
//     user = prompt("1.앞면   2.뒷면");
// }

// user = Number(user);                       // 문자열을 숫자로 변환해서 다시 넣어줌

// if (user == coin){
//     document.write("맞췄습니다! "+(user == 1 ? '앞면' : '뒷면')+"입니다! ");
// }else{
//     document.write("틀렸습니다! "+(user == 1 ? '앞면' : '뒷면')+"입니다! ");
// }






// 주사위 게임
// 주사위는 던져졌다. 주사위의 숫자가 무엇인지 맞추시오.
// 내가 입력한 숫자가 주사위의 숫자와 같다면 정답, 같지 않다면 손목 이라고 출력


// var dice = Math.floor(Math.random()*6)+1;

// var user = inputNum("1부터 6 사이의 숫자를 입력하세요.");

// var user = inputNum
// if (user == dice){
//     document.write("정답!");
// }else {
//     document.write("손목!");
// }


// function inputNum(str){
//     var a = prompt(str);
//     while( isNaN(a)){
//         alert("숫자만 입력 가능합니다.");
//         a = prompt(str);
//     }
//     a = Number(a);
//     return a;                                    // 숫자 외에 다른 것 입력했을 때 띄우는 함수 만들어 놓기
// }

/*  

   주차장 요금 계산
   기본요금 1000원 (30분)
   

   2시간 이상 주차시 기본요금 1500원
   4시간 이상 주차시 기본요금 2500원
   8시간 이상 주차시 기본요금 5000원

   10분 초과시 100원 추가(10분당)

       주차한 시간이 총 몇 분인지 입력하고 요금 출력하기

*/

var parkTime = Number(prompt("주차 시간을 입력하세요(분)"));
var overFee1 = Math.floor((parkTime%60)/10)*100;         // 추가 시간 
var overFee2 = Math.floor((parkTime-30)/10)*100;

var parkFee = 0;

if(parkTime >= 480){
    parkFee = 5000;
}else if(parkTime >= 240){
    parkFee = 2500 + overFee1
}else if(parkTime >= 120){
    parkFee = 1500 + overFee1
}else if(parkTime >= 40){
    parkFee = 1000 + overFee2
}else{
    parkFee = 1000;
}
document.write("총 주차 시간은 " + parkTime + "분 이며, " + "주차 요금은 총 " + parkFee + "원 입니다.");
