// simple function ... viet chuong trinh don gian 
 


function functionname(var1, var2 , var3 ){// khong co kieu bien
	//viet doce o day
	return returnval ; // tra lai bien theo yeu cau
}


function useargs(var1 , var2 , var3){
	
	var a = argument.length ; //  mang co chua cau truc
	var result = "";
	for ( var i = 0 ; i < 1 ; i ++){
		result += "" + argument[i];
	}
	return result ; 
}
var b = useargs("hoa" , " anh dao") ; // == > b = " hoa anh dao " var 3 = undefined 





 /// Global and Local 

var name = " Andy"; // khong nam trong function
 function foo(){
	 var lastname = " smiths"; // nam trong function 
	 return name +''+ lastname ; // co the truy cap vao bien name trong global 
 }
 foo();
 var a = lastname ; // last name khong duoc dinh dang 
 // khong the truy cap bien lastnam trong local
 
 
 
 // Don't forget '
 
  var i = 1 ; 
  function foo(){
	  var i = 3 ; 
  }
  foo();
  var a = i ; // a=>1
  
  
  var i = 1 ; 
  function foo(){
	  i = 3 ; // k co tu khoa cua bien 
	  i = 4 ; // khong co tu khoa cua bien 
  }
  foo();
  
  
  