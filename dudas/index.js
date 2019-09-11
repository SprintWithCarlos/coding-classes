// EXAMPLE TEST CASES
//input: "Hello-LOL"
//output: hELLO-lol

function SwapCase(str) { 

  // turn the string into an array of characters
  var chars = str.split('');
  
  // loop through the array swapping letter cases
  // uppercase -> lowercase
  // lowercase -> uppercase
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toUpperCase()) { 
      chars[i] = chars[i].toLowerCase();
    }
    else if (chars[i] === chars[i].toLowerCase()) { 
      chars[i] = chars[i].toUpperCase();
    }
  }
  
  // return the modified array of characters joined as a string
  return chars.join('');
         
}
   
SwapCase("Hello World");  

function SwapCase(str) { 
  for(var i=0; i< str.length;i++){
    if(str[i].match(/[a-z]/i) !==null) {
      str[i].toUpperCase();
    }if(str[i].match(/[A-Z]/i) !==null){
      str[i].toLowerCase();
    }
  }
  SwapCase("Hello-LOL");

  function SwapCase(str) { 
    return str.replace(/\b[a-z]/gi,function(char){
      return char.toUpperCase();
    });
    return str.replace(/\b[A-Z]/gi,function(char){
      return char.toLowerCase();
    });

    }
    SwapCase("Hello-LOL");


 

   

   

   

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));

    

    /* Flex Items 
    .panel > * {
        margin: 0;
        width: 100%;
        transition: transform 0.5s;
        flex: 1 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .panel > *:first-child { transform: translateY(-100%); }
      .panel.open-active > *:first-child { transform: translateY(0); }
      .panel > *:last-child { transform: translateY(100%); }
      .panel.open-active > *:last-child { transform: translateY(0); }

      const panels = document.querySelectorAll('.panel');

      function toggleOpen() {
        console.log('Hello');
        this.classList.toggle('open');
      }

      function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
          this.classList.toggle('open-active');
        }
      }

      panels.forEach(panel => panel.addEventListener('click', toggleOpen));
      panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));*/

*/
