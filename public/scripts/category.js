$(function(){
console.log("hi");
$('.addtocart').click(function(){
   var item= ($(this)[0]).parentElement.parentElement.children[0].innerText;
   var description=($(this)[0]).parentElement.parentElement.children[1].innerText;
   var price=($(this)[0]).parentElement.parentElement.children[2].innerText;
      var element={item:item,
        description:description,
        price:price
      }
   $.post(
    '/addtocart',
    {
        'json':JSON.stringify(element)
    },
    function(){

    }
);

});


});     