// w3.css에서 정의된 칼라 클래스를 배열에 담는다.
var = arr['w3-deep-orange', 'w3-orange', 'w3-amber', 'w3-yellow', 'w3-khaki',
		'w3-lime', 'w3-light-green', 'w3-green', 'w3-teal', 'w3-blue'
	];

//문자열을 담을 변수를 만든다.
var str='';
//열번 반복해서 태그 채워준다.
for(var i = 0; i<10; i++) {
	str += '<div class="w3-button w3-margin w3-card m2 w3-center'+
		'w3-border-orange w3-hover-yellow w3-border' + arr[i] + '">' + 
		(i+1)+'번 버튼</div>' 
}

//태그 찾아서 채워주고
document.getElementById('cont').innerHTML = str;

/*
	자바스크립트에서의 변수활용
	
		예 ] 
			var no = 10;
			fi(no){
			}
			
	변수에 데이터가 채워져있는 경우는 true
	null, undefind 상태이면 false를 반환한다.
*/

var no = prompt('숫자를 입력하세요.');
if(!no) {
	//이 경우는 변수에  no에 데이터가 없거나 아직정해지지 않은 상태면 실행하세요
	no = '입력값이 없습니다!';
}
alert(no);