var navRequest = new XMLHttpRequest();
var countCartRequest = new XMLHttpRequest();

function navFunction() {
	//sessionStorage.setItem("mine", "회원정보 1");
	//여기도 마찬가지로 요청할때는 session을 이용해서 하면 됨.
	//지금 당장은 테스트로 1
	navRequest.open("Post", "http://localhost:8080/semiproject/nav/session.do", true);
	navRequest.onreadystatechange = navSuccessConnect;
	navRequest.send(null);
	countCart();
}

function navSuccessConnect() {
	if (navRequest.readyState == 4 && navRequest.status == 200) {
		var object = eval("(" + navRequest.responseText + ")");
		var result = object.result;
		
		var signText = $('.header__top__links').children('.desk_sign');
		if (result == "logging") {
			signText.text("Sign Out")
		}
		else {
			signText.text("Sign In")
		}

		console.log(result);
//		console.log(result);
	}
}

//nav 장바구니 갯수
function countCart() {
	countCartRequest.open("Post", "http://localhost:8080/semiproject/cart/countCart.do", true);
	countCartRequest.onreadystatechange = function() {
		if (countCartRequest.readyState == 4 && countCartRequest.status == 200) {
			var object = eval("(" + countCartRequest.responseText + ")");
			var result = object.result;
			
			var signText = $('#h_menu_countCart').children('span');
			signText.text(result);
		}
	};
	countCartRequest.send(null);
}


function checkLogin(state) {
	

}

window.addEventListener("load", function () {
	navFunction();
});



////폼 이동
//function sendIt(){
//var f = document.cartForm;
//var discountCost = $("#actualPayment").text().replaceAll(/\D/gm, "");

//f.discountCost.value = discountCost;
//f.method = "post"
//f.action = "/semiproject/order/payment.do";
//f.submit();
//}

//function removeCandWon(str) {
//return str.slice(2).replaceAll(",", "");
//}

//window.onload = function () {
//navFunction();
//};


function eURI(component) {
	return encodeURIComponent(component);
}


