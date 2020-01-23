// Summary 
// duoi day la thu gon mot so ket qua trong viec chuyen doi  . doi khi co the cuu ban neu su dung lenh if 
// Statement - tuyen bo 
// 

// dang co dieu kien 
// trong js thi lenh dieu kien su dung rat nhieu giong nhu cac ngon ngu thong thuong khac
// no thuong duoc su dung voi bien duoc xac dinh va su dung nhu dang tu dong nghia voi cu phap ngan va kha nang doc
// con neu nhu thay rang no k lam cho code tot hon thi su dung lenh if thong thuong


// lenh if / else 
// trong truong hop nay gia tri binh thuong bang nhau , duoc su dung voi " null" - rong . vay nen neu test null tuong duong voi undefined
// //
if (username==null){ // neu bien la rong hoac undefined 
	username= " trinity" // dinh dang no la gia tri moi 
		
}



if(bulletCount===1){
	bulletCount += ' bullet';
} else {
	bulletCount +='bullets';
}


// 
 var user = (name== null)? ' default user ' : name;
 
 
 
 
 
 // lenh " switch"
 // Switch la cau lenh danh cho truong hop co rat nhieu phuong an ( lua chon, dieu kien)
 // dung quen lenh " break " neu muon tam dung dieu kien va chuyen sang mot dang khac
 // tuy nhien khi su dung string thi no khong giong nhu cach su dung cac ngon ngu khac
 
 
 
 var quote ; 
 switch (charatername){
 case 'Thoan':
	 quote = ' hi Thoan';
	 break;
 case 'Milk':
	 quote = ' hi Milk';
	 break;
	 default : 
		 quote = ' who is that';
	 break;
 }
 
 
 
 // vong lap - loop 
 // 
 
 for ( var i = 0 ; i <=10 ; i ++){
	 dosomthing();
 }
 
 var count = 0 ; 
 while ( count < 10 ) {
	 dosomething();
	 count++ ; 
 }
 
 var count = 100 ; 
 do {
	 dosomething();
 }
 while (--count > 0 );
 
 
 // vong lap dc su dung  cho mot doi tuong duoc lap di lap lai nhieu lan 
 // mang cac chi so chi so duoc danh so cu the boi so nguyen . ngoai ra vong lap co the duoc su dung voi cac phan tu khong duoc danh so trong mang
 //
 
 
 
 var a = [ 123,456,789];
 for (var  i in a ){
	 dosomething(a[i]);
	 
 
 }
 
// webview: run html & javascript
// bridge: tu javascript goi native code
// android: java/kotlin
// ios: objective c, swift
 
// UI component
   // HTML 
   // Javascript
   // CSS
 
// Stage 
   // Button
 
 // react native
 
 // AJAX
 