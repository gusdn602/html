/* 
 	day05/Test01.html.javascript file
 */
document.getElementById('file').onchange = function(e){
	var val = this.value;
	/*//문자열해결법
	var val1 = val.slice(va.indexOf(".")+1).toLowerCase();
	
	if(val1 !="jpg" && val1 !="jpeg" && val1 !="png" && val1 !="gif"){
		document.getElementById('file').value='';
		alert("썸네일 이미지는 파일(jpg, jpeg, png, gif)만 등록가능합니다.");
		
		return;
	}
	 */
		//정규식 해결
	var val2 = /^.*(jpg|jpeg|png|gif)$/i;
	if(val2.test(val) == false){
		alert("썸네일 이미지는 파일(jpg, jpeg, png, gif)만 등록합니다.");
		document.getElementById('file').value='';
		return;
	}
//	alert(val);
	//location.href = 'Test01.html?file= ' + val;
//	파일을 선택하는 경우 파일태그의 value 값은 거짓경로와 파일이름이 입력이되고
//	파일의 내용은 URL객체에 해당파일을 선택하는 순간 저장이 된다.
//	따라서 파일을 사용하려면 url객체에서 꺼내서 사용해야 한다.
	
/*	
 	문제]
 	선택한 파일이 jpg, jpeg, png, gif 인 파일만 입력이 되게 처리하세여.
 */
	
//	파일 가져오고	
	var vfile = URL.createObjectURL(e.target.files[0]);
	//img 태그 src 속성처리 
	document.getElementById('img1').setAttribute('src',vfile);
	//태그의 클래스 변경하고
	document.getElementsByClassName('dnone')[0].classList.remove('dnone');
	}

var name = window.prompt('이름을 입력하세요.!');

//문제 ] 정규식 검사하세요.
var nameck = /^[가-힣]{2,24}$/;
window.alert(val.test(name));