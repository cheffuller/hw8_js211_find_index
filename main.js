i = 0;

do {
  i += 1;
  console.log(i);
} while (i < 1000);

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

const keyLog = (obj) => {
  console.log(Object.keys(obj));
};

keyLog(person);

const entryLog = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};

entryLog(person);

const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },
  {
    firstName: "Carla",
    lastName: "Fuller",
    birthDate: "Aug 3, 1951",
    gender: "female",
  },
  {
    firstName: "Dana",
    lastName: "Fuller",
    birthDate: "Sep 8, 1951",
    gender: "male",
  },
  {
    firstName: "Lena",
    lastName: "Fuller",
    birthDate: "Mar 4, 1979",
    gender: "female",
  },
  {
    firstName: "Levi",
    lastName: "Manning",
    birthDate: "Apr 21, 2014",
    gender: "male",
  },
];

const birthYearIsOdd = (personsArray) => {
    function isOdd(num) { return num % 2;}
    for (const el of personsArray) {
        if (isOdd(parseInt(el.birthDate.slice(-4)))) {
            console.log(el.birthDate);
        }
    }
}

birthYearIsOdd(arrayOfPersons);

console.log(arrayOfPersons.map(el => el));

console.log(arrayOfPersons.filter(el => el.gender === 'male'))

const before1990 = birthDate => birthDate < 1990;

console.log(arrayOfPersons.filter(el => before1990(parseInt(el.birthDate.slice(-4)))))

console.log(new Date().getFullYear())

const over21 = birthdate => (new Date().getFullYear() - birthdate) >= 21;

console.log(arrayOfPersons.filter(el => !over21(parseInt(el.birthDate.slice(-4)))))
