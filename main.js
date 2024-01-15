
var regForm=document.querySelector(".registerForm");
regForm.onsubmit=function(e)
{
   e.preventDefault();
   var amount= e.target.elements[0].value;
   console.log(amount);
   var currency=e.target.elements[1].value;
   console.log( e.target.elements[1].value);

   if(currency == 'dollar')
   {
    var afterConvert=amount/3.74422;

   }

   else if(currency == 'dinar')
   {
    var afterConvert=amount/5.2808;

   }

   else 
   {
    var afterConvert=amount;
   }
   finalResult=document.querySelector(".result").textContent=afterConvert;

}