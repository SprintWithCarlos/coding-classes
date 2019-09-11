
/*Have the function AdditivePersistence(num) take the num parameter 
being passed which will always be a positive integer and return its
additive persistence which is the number of times you must add the
digits in num until you reach a single digit. 
For example: if num is 2718 then your program should
return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and 
you stop at 9.*/
function AdditivePersistence(num) { 

    var arr= num.toString().split("");
    
    while(arr.length > 1){
    var added= 0;
    
    for(var i=0; i < arr.length; i++){
       added += parseInt(arr[i]);
    
    }
    return 1 + AdditivePersistence(added);
    
     }
     return 0;
    }
     
    AdditivePersistence(2178);  
    
    function AdditivePersistence(num) { 

        function arrprep(numb) {
          var numstr = numb.toString();
          var arr = numstr.split('');
          var numarr = arr.map(function(val) {
            return parseInt(val);
              })
          return numarr
        }
        
        function addup(arr) {
          var redux = arr.reduce(function(a, b){
            return a + b })
         return redux
           }
        
        var count = 0;
        
        while (num > 9) {
          num = addup(arrprep(num));
          count++;
        }
            
        return count
               
      }
     