function printInventory(inputs) {
       var item;  
    var list='';  
    var sum=0;  
    var item_list=[];  
    var cart_list=[];  
    var barcode_list=[];                              
    var allItems = loadAllItems();  
    var item_barcode;   
    var Promotion='';  
    var save=0;  
     
 //    _.map(item_list,function(n){  
  //          n++;  
  //         });  
    
  //     等价于for(var n =0; n<item_list.length;n++){  
  //         n++;       
    
    
    
    _.map(inputs,function(i)  {
    // for(var i=0; i< inputs.length; i++ ) { 
         
       		item_barcode=i;  
      	    inputs=i.length==10?barcode_list.push(item_barcode):barcode_list.push((i.substr(0,10)),(i.substr(0,10)));            
     });  
         
          
    _.map(barcode_list,function(j)  
          {  
     _.map(allItems,function(k)  
           {  
       item=k;  
       if(k.barcode==j)  
       {  
           cart_list.push(item);  
       }    
     });   
  });  
    
    
    _.map(cart_list,function(l){  
        item=l;  
        if(item_list.length===0){
           item.count=1;  
           item_list.push(item);   
        }  
        
        else{ 
            
           for(var m=0;m<item_list.length;m++){  
                 
               if(l==item_list[m]) {
                   
                    item.count++;  
                }  
                else if(m==item_list.length-1){
                    
                    item_list.push(item);  
                    item.count=0;  
               }  
            }  
        }  
  });  
    
    _.map(item_list,function(n) {    
        if(n.count>=3)  
        {  
            Promotion+='\n'+'名称:'+n.name+','+'数量:'+parseInt(n.count/3)+n.unit;  
            save+=parseInt(n.count/3)*n.price;    
        }  
            list=list+'\n'+'名称:'+n.name+','+'数量:'+n.count+n.unit+','+'单价:'+
                 n.price.toFixed(2)+'(元)'+','+'小计:'+((n.count-parseInt(n.count/3))*n.price).toFixed(2)+'(元)';  
          
            sum+=(n.count-parseInt(n.count/3))*n.price;      
    });  
      
   
     // 获取时间
    dateDigitToString = function (num) {  
            return num < 10 ? '0' + num : num;  
        };  
        var currentDate = new Date(),  
            year = dateDigitToString(currentDate.getFullYear()),  
            month = dateDigitToString(currentDate.getMonth() + 1),  
            date = dateDigitToString(currentDate.getDate()),  
            hour = dateDigitToString(currentDate.getHours()),  
            minute = dateDigitToString(currentDate.getMinutes()),  
            second = dateDigitToString(currentDate.getSeconds()),  
            formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;  
  
    list='***<没钱赚商店>购物清单***'+'\n'+'打印时间:'+ formattedDateString+
         '\n'+'----------------------' +list+'\n'+'----------------------'+'\n'+
         '挥泪赠送商品:'+Promotion+'\n'+'----------------------'+'\n'+'总计:'+
          sum.toFixed(2)+'(元)'+'\n'+'节省:'+save.toFixed(2)+'(元)'+'\n'+'**********************';  
    
       console.log(list);       

}

