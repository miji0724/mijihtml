
var ganji = ["신","유","술","해","자","축","인","묘","진","사","오","미",]


function zodiac(year){
    return ganji[year%12];
}

document.getElementById("btn").onclick = function(){
    var samjae = false;
    var birth = document.getElementById("birth").value ;
    var target = document.getElementById("target").value ;
    if( birth.length * target.length == 0 ){              // 둘중의 하나라도 쓰지 않으면
         alert("생년과 대상연도를 입력해주세요.");
    }else{
        var birthDdi = zodiac(birth);
        var targetDdi = zodiac(target);
        if( birthDdi == "신" || birthDdi == "자" || birthDdi == "진"){
            if(targetDdi == "인" || targetDdi == "묘" || targetDdi == "진")     // 삼재
        }else{
            samjae = false;
        }
    }

    if( birthDdi == "인" || birthDdi == "오" || birthDdi == "술"){
        if(targetDdi == "신" || targetDdi == "유" || targetDdi == "술")     // 삼재
    }else{
        samjae = false;
    }

    if( birthDdi == "사" || birthDdi == "유" || birthDdi == "축"){
        if(targetDdi == "해" || targetDdi == "자" || targetDdi == "축")     // 삼재
    }else{
        samjae = false;
    }

    if( birthDdi == "해" || birthDdi == "묘" || birthDdi == "미"){
        if(targetDdi == "사" || targetDdi == "오" || targetDdi == "미")     // 삼재
    }else{
        samjae = false;
    }
}    

if (samjae){
    alert(birthDdi+"띠인 당신은"+target)
}
