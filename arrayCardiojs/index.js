const scientists = [
  {
    first: "Albert",
    last: "Einstein",
    born: 1879,
    passed: 1955,
  },
  {
    first: "Nikola",
    last: "Tesla",
    born: 1856,
    passed: 1943,
  },
  {
    first: "Louis",
    last: "Pasteur",
    born: 1822,
    passed: 1895,
  },
  {
    first: "Galileo",
    last: "Galilei",
    born: 1564,
    passed: 1642,
  },
  {
    first: "Michael",
    last: "Faraday",
    born: 1791,
    passed: 1867,
  },
  {
    first: "Max",
    last: "Planck",
    born: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    born: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    born: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    born: 1878,
    passed: 1968,
  },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1800's

//const eignteen = scientists.filter( scientist => scientist.born >=1800 && scientist.born <=1900);
//console.table(eignteen);
    

    


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const fullName = scientists.map(scientist => `${scientist.first} ${scientist.last}`)
//console.table(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//const sorted = scientists.sort((a, b) => (a.born > b.born) ? 1 : -1);
//console.table(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = scientists.reduce((total, scientist)=> {
    return total + (scientist.passed-scientist.born);
},0);
console.log(`${totalYears} yrs`);
    

// 5. Sort the inventors by years lived
const sortedYear = scientists.sort((a, b) => {
    const person1 = a.passed - a.born;
    const person2 = b.passed - b.born;
    return (person1 > person2) ? 1 : -1;

});
console.table(sortedYear);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*const category = document.querySelector('.mv-category');
        // Transforming nodelist in to array
        const links = Array.from(category.querySelectorAll('a'));
        const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));*/

//toDO 7. sort Exercise
// Sort the people alphabetically by last name

// toDO 8. Reduce Exercise
// Sum up the instances of each of these
