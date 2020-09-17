function display(val)
{
document.getElementById("calc").value+=val
 }
function solve()
{
let x = document.getElementById("calc").value
let y = eval(x)
document.getElementById("calc").value = y
}
function clr()
{
document.getElementById("calc").value = ""
}
function validateform(){
var name=document.myform.name.value;
var mobnum=document.myform.number.value;
var email=document.myform.email.value;
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
if (name==null || name==""){
  alert("Name can't be blank");
}
else if(!name.value.match(letters))
    {
    alert("Cannot take name as numbers or special characters.");
    }
else if (!(mobnum.value.match(numbers) && mobnum>999999999 && mobnum<10000000000)) {
  alert("Mobile number should contain only numbers ");
}
else if (!(email.includes('@') && email.include('.'))) {
  alert("Invalid format of email.");
}
else{
  alert("Your form is submitted")
}
}
function palindrome()
{
  var word1=document.getElementById("str").value;
  var l = word1.length;
  var word=word1.toLowerCase();
  for (var x = 0; x < l/2; x++) {
		if (word.charAt(x) != word.charAt(l-x-1)) {
			alert("Entry is not a palindrome.");
			return false;
		}
	}
    alert("It is Palindrome String");
    return true;
}
function anagrams()
{
  var str1=document.getElementById("str1").value;
  var str2=document.getElementById("str2").value;
  var s1=str1.toLowerCase();
  var s2=str2.toLowerCase();

    var sortStr1 = s1.split('').sort().join('').trim();
    var sortStr2 = s2.split('').sort().join('').trim();

    if(sortStr1 === sortStr2)
    {
      alert("The given strings are Anagrams");
    }
    else
    {
      alert("The given strings are not Anagrams ")
    }
}
function game()
{
  var num1=parseInt(document.getElementById("num1").value);
  var num2=parseInt(document.getElementById("num2").value);
  console.log(num1,num2);
  if(num1<0 || num1>1000 || num2<0 || num2>1000 )
  {
    alert("The input numbers are not in range")
    document.getElementById("num1").innerhtml="";
    document.getElementById("num2").innerhtml="";
  }
  else{
    num1%=3;
    num2%=3;
    console.log(num1,num2);
    if(num1==0 && num2==1 || num1==1 && num2==0)
    {
      alert("Human Survives")
    }
    else if(num1==0 && num2==2 || num1==2 && num2==0)
    {
      alert("Human Dies")
    }
    else
    {
      alert("Cockroach Survives")
    }
  }
}
