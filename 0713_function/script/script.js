// function hello(name,lang){
//     if(lang == "ko"){
//         alert(name+"님 안녕하세요!");
//     }else if(lang == "ge"){
//         alert(name+"Guten tag");
//     }else if(lang == "ch"){
//         alert(name+"Ni hao");
//     }else{

//     }
// }

//hello("홍길동","ko");



// var cel = "유재석";

// function aaa(){
//     var cel = "이미지"
//     alert("가장 유명한 사람:"+cel);
// }

// aaa();



//var name = prompt("이름을 입력하세요");

//alert(name+"님 안녕하세요.");

// var a = prompt("첫 번째 수");
// var b = prompt("두 번째 수");
// alert(a+b);



// var adult = confirm("만 18세 이상입니까?");    // 확인 or 취소
// if(adult){ 
//     alert("어서오세요!")
// }else{
//     alert("애들은 가라")
// }



// var del = confirm("정말로 데이터를 삭제하시겠습니까?")
// if(del){
//     alert("데이터가 삭제되었습니다.")
// }



// function plus(a,b){
//     var result = a + b;
//     return result;
// }



// console.log(plus(3,5));



// document.getElementById("aaa").onclick = function(){
//      alert("누르지마");             //>>>>>>1<<<<<<<<<<
//  }
// // // 문서에서 아이디가 aaa 인 것을 눌렀을 때 함수가 실행된다.



// function sing(){
//     alert("가나다라마바사");
// }

// document.getElementById("aaa").onclick = sing();


// document.onmousemove = function(event){
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log( x + "," + y );
// }


// 변수 s에 0을 넣어둔다.
// 문서에서 id가 aaa인 녀석을 클릭했을 때 이런 일이 벌어질 것이다.
    // s를 1 증가시키자
    // 문서에서 아이디가 score인 녀석의 안쪽에 s를 넣자.
// var s = 0;
// document.getElementById("aaa").onclick = function(){
//     s++;     // s = s + 1;
//     document.getElementById("score").innerHTML = s;
// }


// var age = 13;
// height = 163;
// if(age>=15 || height>= 150){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능");
// }


var deposit = 100000;
var monthly = 500;
var distance = 15;
var top = true;
var direction = "south";

if((deposit <= 100000 && monthly <500 && distance <= 15 && top)&&direction){
    alert("입주");
}else{
    alert("입주 안함");
}