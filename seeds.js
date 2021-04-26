// Initialize the DB if it does not exist already
use zoo;
// ..Check if we can make this not underlined red

// Clear the database
db.dropDatabase();

// Add multiple objects in an array (as opposed to insertOne object)
db.animals.insertMany([
    {
        name: 'Janet',
        type: 'Polar Bear'
    },
    {
        name: 'Norman',
        type: 'Penguin',
        age: 5
    }
])