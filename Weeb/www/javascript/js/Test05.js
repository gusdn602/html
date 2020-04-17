/*
	정규 표현 객체
		방법 1]
			var 변수이름 = new RedExp(패턴, 검색옵션);
			
		방법 2]
			var 변수이름 = /패턴/검색옵션;
*/

var str = 'HTML Css Jquery';
var reg1 = /css/i;
var reg2 = new RegExp('css');

var result = reg1.test(str);
var result2 = reg2.test(str);

document.write('<div class="w3-col m3"><p></p></div>');
document.write('<div class="w3-col m6" w3-center">');
document.write('<div class="w3-col w3-padding w3-card">');
document.write('<h3 class="w3-blue w3-margin">' + str + ':' + result + '</h3>');
document.write('<h3 class="w3-orange w3-margin">' + str + ':' + result2 + '</h3>');
document.write('</div>');
document.write('</div>');

/*
	문제 ]
		아이디를 입력받아서
		입력한 아이디가 형식에 맞는지 판단해서 출력하세요.
		
		아이디는 5자리이상 8자리까지
		첫문자는 대문자로 시작해야 한다.
		특수문자는 _이외에는 허용하지 않는다.
*/

var sid = window.prompt('아이디를 입력하세요.!');

var reg1 = /^[1-9]{3}$/;

var result3 = reg1.test(sid);
alert(result3);
/*
 * 	 참고 ] 
 * 		시작문자 표현방법
 * 			첫글자가 1~9까지 와야 될경우
 * 			/^[1-9]{10}/	--> 1~9까지 숫자로 구성된 문자열 
 */
var ssid = new RegExp()