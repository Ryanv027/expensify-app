const person = {
    name: 'Ryan',
    age: 26,
    location: {
        city: 'San Diego',
        temp: 68
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}. `)

const { city, temp: temperature } = person.location;

if(city && temperature) {
    console.log( `It's ${temperature} in ${city} ` )

}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holliday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const address = ['2015 cable st', 'Blank', 'California']

const [, , state = 'Oregon' ] = address 

console.log( `You are in ${state} ` )

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, smallPrice, medPrice, largePrice] = item 

console.log(`A medium ${itemName} costs ${largePrice} `)

