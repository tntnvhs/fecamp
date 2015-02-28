jQuery(function($){
	var $gnbBtn = $(".gnb>button");

	$gnbBtn.on("click",function(){
		// $(".gnb>ul").slideToggle(200);
		$(this).next("ul").slideToggle(200);
		// toggle은 열린 것을 닫혀주고 닫힌것을 열어주고 if, else가 다 들어있음 
		// 200은 0.2
		if($gnbBtn.text() === "메뉴 열기"){
			// 메뉴 닫기 텍스트 표시
			$gnbBtn.text("메뉴 닫기");
		} else {
			// 메뉴 열기 텍스트 표시
			$gnbBtn.text("메뉴 열기");
		}
		
	});
});
// $=jQuery