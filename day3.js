// Operators // 
/// cach to chuc 
// cach to chuc trong javascript rat mang . khong giong nhue mot so ngon ngu khac nhu C , 
// cach  to chuc khong chi su dung cac thuat toan ma con rat huu dung trong chuoi 
// cach hoat dong cua cac phep toan thi lam viec giong nhu cach lam viec cua cac ngon ngu khac  
// chu y rang dau + con duoc su dung de noi cac chuoi voi nhau 
var a = 6 + 4 ; // a se thuc hien phep tinh va ra ket qua bang 10 
 var b = - a ; // b se tra gia tri la - a == > - 10 
 var c = 6 - 4 ; // c tra gia tri bang 2 
 var d = 1 , e = ++d ; // 

var f = 1 , g = f++; // f co gia tri bang 2 con g = 1 
var h = 7 , i = --h;// h va i deu bang 6
var j = 7 , k = j--;// j bang 6 con k = 7 


var l = 3 * 3 ; // thuc hien phep nhan = 9 
var m = 10 / 3 ; // m bang mot gia tri thap phan 3.333333335
var n = 10 % 3 ; // thuc hien phep chi het lay so du ... 10 chia 3 du 1 nen se tra lai ket qua bang 1 
var o = " catch " + " you"; // tra lai gia tri cua o = " catch you " . luc nay 2 chuoi da dc noi truc tiep voi nhau

// Equality = gia tri bang nhau 
// dieu rieng biet trong javascript la co 2 loai dau bang  de so sanh : so sanh chat che va so sanh chuyen doi .
/// tuy nhien dieu can ghi nho rang  phep toan co 3 dau bang la thuc hien so sanh bang nhau voi ca kieu va gia tri
// con 2 dau bang == thi chi so sanh 1 kieu duy nhat cua du lieu nay voi mot du lieu khac

// vi du ve so sanh bang 

var a = " 2 "==2; // se tra ve gia tri boolean la true 
var b = " 2 " != 2 ; // se tra ve gia tri sai vi gia tri cua bien 2 chinh bang 2
// vi du ve so sanh chat che 
 var c = " 2 " === 2 ; // se tra ve gia tri fale
 var d = " 2 " !== 2 ; // se tra ve gia tri dung boi d ban dau la kieu string con 2 la kieu so nguyen nen khi so sanh mac du gia tri 
 // giong nhau tuy nhien kieu du lieu khac nhau
 // Comparison - phep so sanh 
 // giong nhu toan hoc thi js cung co cach hoat dong giong nhuw cac ngon ngu khac.
 // tuy nhien phai chu y rang dau so sanh con co the thuc hien voi ca string
 var a = 2 >2 ; // a tra ve gia tri false
 var b = 2 <=2 ;// b tra ve gia tri true
 var c = " 2 " >= 2 ; // c tra ve gia tri true vi gia tri cua bien c cung bang 2
 var d = 2 < 2 ; // d duoc tra ve gia tri false
 var e = 2 <=2 ; // e duoc tra ve gia tri true
 var f = 'abc'<'def';// f dc tra ve gia tri dung
 
 
 
 ///So sanh logical 
 var a = true && false ; // a se dc tra ve gia tri false boi a khong the vua bang dung va vua bang sai duoc
 var b = true || false ; // b tra ve gia tri true vi day la cach so sanh b co the la gia tri dung hoac gia tri sai 
 var c = ! true ; // tra ve gia tri false vi c khong duoc xac dinh cu the nen khong the so sanh logic la dung hay sai
 // bitwise : he thong bitwise giup cac lap trinh vien su dung cac chu so nhu trinh tu 31 bit ( gom 1 va 0 )
 // khong don gian de hieu rang nos dang lam nhu the nao nhung no rat huu dung , vi du co the chay duoc nhu sau 
 var a = 42 & 2 ; // a = > 2 ( and ) 
 var b = 7 | 2 ; // b => 2 ( or )
 var c = 7 ^ 2 ; // c = 7 ( xor)
 var d = ~ 8 ; // d => - 7 ( not )
 var e = 1 << 3 // e = > 8 ( shift left ) 
 var f = 8 >> 2 ; // f = > 2 ( shift left )
 var g = - 1  >> 2 ; // g=> -1 
 var h = -1 >>> 2 ; // h => 1073741823
 
 
 
 // Assignement - phep gan 
 // chuc nang gan co the luu lai o mot so noi va nang cao kha nang doc lai chung
 
 var a = 1 , b = 1 ; 
 a += b ; // a = a + b 
 a -= b ; // a = a - b 
 a *= b ; // a = a  * b
 a /= b ; // a = a / b 
 a %= b ; // a = a % b 
 a <<= b ; // a = a << b 
  a >>= b ; // a = a >> b 
  a >>>= b ; // a = a >>> b 
  a &= b ; // a = a & b 
  a != b ; // a = a | b 
  a ^= b ; // a = a ^ b 
  
 // Lenh  " in "
  // lenh in duoc su dung de kiem chung mot thuoc tinh nao do co thuoc doi tuong nao do hay khong . nen can than khi su dung chung
   var a = [1,9,4]; 
   var b = ( 2 in a ); // tai day se tra gia tri false vi 2 khong la mot phan tu thuoc bien a 
   var c = ( 9 in a ); // tai day se tra gia tri true vi gia tri 9 thuoc phan tu cua a 
   var d =  (length in a ) ; // tai day tra ve gia tri true
  // Lenh typeof 
   // typeof duoc su dung de kiem chung kieu cua bien  cua bien 
    var a = 3 ; 
    var b = typeof a ; //  b = > "number" boi gia tri cua a bang so 
    var c = "";
    var d = typeof c ; // d = > " string " 
    var e = true ; 
     var f = typeof e ; // f => " boolean "
     
 
 
 
 

