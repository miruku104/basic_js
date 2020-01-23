// Array : kieu mang 
// mang la mot ban ghi co tap trung nhieu du lieu co gia tri . Gia tri co the ton tai voi nhieu kieu .
// moi gia tri duoc goi boi mot thanh phan va vi tri dinh san trong mang do gan voi chi so nhat dinh 
// Doi tuong mang thi se co mot vai tinh chat nhat dinh va phuong phap . 
// tinh chat quan trong nhat trong mang la " length"- do dai cua mang . 
// no co chua kich thuoc cua mang 
// cu the ve cach tao mang 
// cach don gian nhat de tao mang do la  dat mang vao dau ngoac vuong va  ngan cach boi dau cham phay de ngan cach cac gia tri 
// Chu y rang hoan toan co the tao duoc 4 phan tu khong duoc dinh dang  va do dai cua mang la 4 
// cac vi du dien hinh
var a = [];//  tao mang rong
var b = new Array(); // cach tao mot mang moi 
var c = [,,,,];// tao 4 phan tu va ca 4 deu khong xac dinh 
var d = new Array(4);// mang nay co gia tri tuong tu nhu mang c
var e = ["hiro", 1 , true ]; //3 phan tu voi cac kieu khac nhau 
var f = new Array("hiro", 1 , true); // mang nay co gia tri tuong duong nhu mang e
// Doc va viet 
// doc va viet trong mang bang dau hay vaf tuong duong voi ciec theo doi qua trinh hoat dong 
// chu y rang viec doc duoc tu va chi so ma chua tung duoc khoi tao cung se tra ve gia tri la " undefined " 
// co the chen gia tri voi chi so xac dinh , va no co the duoc goi la " mang roi rac " 
// do dai co the duoc cap nhat toi da la 1 don vi 
var a =["pink"]; // bat dau bang mang voi 1 phan tu duy nhat 
var b = a[0];// khi doc b se duoc gia tri ;" pink
var c = a [100]; // khi doc c se ra gia tri undefined vi a chi co 1 phan tu voi chi so la 0 
// tuy nhien day khong phai la loi ma la khong co phan tu hay khong xac dinh duoc phan tu can doc
a[1] = 3.14 ; // lenh thuc hien chen phan tu 3.14 vao mang tai vi tri 1 ==> ["pink", 3.14 ]
var i = 2 ; // 
 a [i] = 3 ; // thuc hien chen phan tu  i = 3 vao mang ==> [ " pink " , 3.14 , 3 ]
 a [ i + 1 ] = " rabbit"; // thuc hien chen phan tu " rabbit vao mang ==> [ " pink " , 3.14 , 3 , " rabbit " ]
 a[a[i]] = a [0]; // thuc hien doi gia tri cua phan tu trong mang a tai vi tri i bang gia tri cua mang a tai vi tri 0
 var d = a . length ; // se tra ve gia tri bang 4 vi mang co 4 phan tu 
 
 
 
 // adding and deleting : 
 // Lenh them va xoa phan tu khoi mang 
 // de them va bot phan tu khoi mang thi phai su dung cac phuong phap cua doi tuong mang . 
 // co rat nhieu  cach huu dung tron do don gian nhat la lenh " pop " va " push "
 // va mot cach phuc tap hon la " splice " 
  var a = ["follow", " the ", " white", " rabbit" ];// khoi tao mang a cung cac phan tu 
  var b = a . pop ();// lenh nay da lay khoi mang a phan tu cuoi cung cua mang la " rabbit" 
  // vi vay trong mang chi con lai 3 phan tu 
  var c = a. push(" sheep");// chen phan tu " sheep" vao cuoi mang 
  // nhu vay mang a se duoc tao thanh mot mang voi 4 phan tu bao gom phan tu moi [ " follow " , " the " , " white " " sheep "]
  var d = a . shift ();// lay phan tu dau tien khoi mang " follow "
  var e = a . unshift("follow"); // tra lai phan tu da bi lay boi lenh " shift "
  // tuy nhien vi tri tra lai la nhu nhau nhung gia tri tra lai co the khac nhau //
  //
  // 
  var f = a . splice(2 ,1);// lenh nay cho phep lay 1 phan tu tai vi tri cua mang co chi so la 2 
  var g = a . splice ( 1 , 2 , " me");
  // mang se bi xoa di 2 phan tu tinh tu phan tu tai vi tri co chi so bang 1 dong thoi chen phan tu " me " vao mang
  
  
  
  


