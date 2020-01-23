// Type conversion  - kieu truyen du lieu 
// js co the truyen du lieu tu kieu du lieu nay sang dang du lieu khac 
// no rat quan trong trong de hieu mot cach ngam dinh va giup tranh duoc mot so bug la 
// 
// 

// Explicit : ro rang 
// chuyen doi ro rang co 1 vai vi du cu the giup chuyen doi du lieu tu dang string sang dang so .
// chu y rang neu cac so tu nhien va so thap phan deu la so thi su sung lenh " parseInt" voi so thap phan 
// dung de xoa moi du lieu sau dau thap phan 
//


// chuyen tu cac dang khac sang dang so 


var a = number ("10"); // ra ket qua a bang 10 
var b = number (false);// ra ket qu bang 0 
var c = parseInt("10",10); // ra ket qua bang 10
var d = parseInt(10.2);// ra ket qua d = 10 vi sau dau thap phan cac phan tu da bi loai bo 
var e = parseInt("10.2"); // ra ket qua bang 10.2

// chuyen tu cac dang khac sang dang chuoi
 var a = string (false);//ket qua a = "false"
 var b = string ( 10) ; // ket qua ra b = " 10 "
 var c = string(10.2);// ra ket qua c = " 10.2
var d = (10).toString();//ra ket qua d = "10"


// chuyen sang dang boolean
 //
var a = boolean(10);// a==> true
var b = boolean(0);// b = > false
var c = boolean(0.3); // c => true
var d = boolean ("true");// d = > true


// dang Implicit - dang ngam dinh
// co rat nhieu cach de chuyen tu dang chuoi sang dang so . hieu sat co the khac nhau nhieu tuy thuoc vao cong nghe 
// da duoc su dung ow plateform . cu phap ngan se duoc uu tien cho bang thong


 // phai that can than khi su dung dau + giua cac so va chuoi ( string and number )


// chuyen sang so number 
var a = +"10";// tra ket qua bang a = 10 ;
var b = "10">>0 ; // tra ket qua bang 10 
var c = "10"*1 ; // tra ket qua bang 10 
var d = ~~"10"; // tra ket qua bang 10
var e = "2" * " 5"; // e = 10 vi ca 2 chuoi da dc chuyen sang dang so 



// chuyen sang dang string 
var a = 10 + "10"; // a=> " 1010"
var b = "10" + "10"; // b = > "1010"
var c = 10 + " agents"; // c = > "10 agents"
var d = 10 + 10 + " agents"; // d =>20 agents


// chuyen sang dang boolean 
var a = !!'momo'; // a = > true
var b = !!''; // b = > false
var c = !!'0'; // c = > true
var d = !!'1'; // d=> true

