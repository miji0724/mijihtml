// for : ~하는 동안은 계속 반복. 
// for(시작값; 조건식; 증감식;){
    // 반복 할 내용
// }
// i : 반복한 횟수



// for( i = 0 ; i < 5 ; i++ ){
//     document.getElementById("para1").innerHTML = document.getElementById("para1").innerHTML + "*";
// }  // *을 5번 누적시켜서 HTML 에 있는 para1에 누적 시킨다.

// var total = 0;

// for( i = 0 ; i <= 100 ; i++ ){
//     total = total + i;
//     document.getElementById("para1").innerHTML = total;
// }

// for ( i = 100; i >= 0 ; i-- ){
//     total = total + i;
//     document.getElementById("para1").innerHTML = total;
// }





// 0 + 2 + 4 + ... + 99 + 100

// var total = 0;

// for(i=0; i<=100; i++){
//     if(i%2 == 0){
//         total = total + i;
//     }
// }
// document.getElementById("para1").innerHTML = total;


// for(i=0; i<=100; i++){
//     if(i%2 == 1){
//         total = total +1;
//     }
// }
// document.getElementById("para1").innerHTML = total;







//아이디가 para1인 태그 내부에 100개의 *을 기입하는 코드작성

// var star = "";

// for(i=0; i<100; i++){
//     star = star +"*";
// }
// document.getElementById("para1").innerHTML = star;






//아이디가 date인 태그의 내부에 <option></option>를 기입하는 행위를 31번 반복하되 옵션태그 내에는 
//1부터 31까지의 숫자가 들어가야 한다.
// 31번 반복. 아이디 date에 내용추가. <option>{반복한 횟수 + 1}</option>


// var tag = "";

// for(i=0; i<30; i++){
//     tag = tag + "<option>"+ (i+1) +"</option>";
// }
// document.getElementById("date").innerHTML = tag;







