$(function(){

    var totalvalue=0;
     var idx=($(".tbody tr").length)-1;
    // console.log($(".tbody tr")[idx].children[0]);
    
    console.log($(".tbody tr")[0]);
    
    for(var i=0;i<=idx;i++){
        var price=$(".tbody tr")[i].children[1].innerText;
        price=parseInt(price);
        var quantity=$(".tbody tr")[i].children[2].innerText;
        quantity=parseInt(quantity);
                
        totalvalue+=price*quantity;
    }
    console.log(totalvalue);
    
    
    
    // $(".tbody tr")[idx].children[1].innerText=totalvalue;
    $("#totalvalue")[0].innerText=totalvalue;

    $(".plus").click(function(){
        // console.log($(this)[0].parentElement.parentElement);
        var item=$(this)[0].parentElement.parentElement.children[0].innerText;
        var price=$(this)[0].parentElement.parentElement.children[1].innerText;

        var quantity=$(this)[0].parentElement.parentElement.children[2].innerText;
        console.log(quantity);
        quantity=parseInt(quantity);
        totalvalue-=price*quantity;
        var newquantity=quantity+1;
        var element={
            item:item,
            quantity:newquantity
        }
        if(quantity>=0&&quantity<7){
        $.post(
            '/updatequantityincart',
            {
                'json':JSON.stringify(element)
            },
            function(){
        
            }
        );
        $(this)[0].parentElement.parentElement.children[2].innerText=newquantity;
        $(this)[0].parentElement.parentElement.children[3].innerText=newquantity*price;
        totalvalue+=price*newquantity;
        $("#totalvalue")[0].innerText=totalvalue;

    }else{
        alert("Not possible")
    }

        // console.log(item);

        
    });
    $(".minus").click(function(){
        // console.log($(this)[0].parentElement.parentElement);
        var item=$(this)[0].parentElement.parentElement.children[0].innerText;
        var price=$(this)[0].parentElement.parentElement.children[1].innerText;

        var quantity=$(this)[0].parentElement.parentElement.children[2].innerText;
        console.log(quantity);
        quantity=parseInt(quantity);
        totalvalue-=price*quantity;
        var newquantity=quantity-1;
        var element={
            item:item,
            quantity:newquantity
        }
        if(quantity>0&&quantity<=7){
        $.post(
            '/updatequantityincart',
            {
                'json':JSON.stringify(element)
            },
            function(){
        
            }
        );
        $(this)[0].parentElement.parentElement.children[2].innerText=newquantity;
        $(this)[0].parentElement.parentElement.children[3].innerText=newquantity*price;
        totalvalue+=price*newquantity;
        $("#totalvalue")[0].innerText=totalvalue;
       
    }else{
        alert("not possible")
    }

        // console.log(item);

        
    });
})