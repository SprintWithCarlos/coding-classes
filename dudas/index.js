// EJERCICIOS QUE NECESITO QUE REVISEMOS JUNTOS.
//CIERTAS FORMAS DE COMO ESTAN HECHOS ME GENERAN DUDAS



const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

 

   Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

     const ordered = inventors.sort(function(a, b) {
     inventors   
      if(a.year > b.year) {
        return 1;
       } else {
         return -1;
       }
    });

    const ordered1 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered1);


    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
      });
      console.table(oldest);

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




