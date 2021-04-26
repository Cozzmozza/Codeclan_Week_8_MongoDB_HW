use zoo;


// ---------------- READ -------------------
// Object ids for each entry:   _id
// To query the ID, create an instance of the objectId
// We can see the ids from compass. Janet the PB has 6086ff04da4466072b3e1a2d

const id = ObjectId('6086ff04da4466072b3e1a2d');

// Find the first (and only) entry with an _id matching the above
db.animals.findOne({ _id:id });


//---------------- UPDATE --------------------
// To update an existing entry we can use updateMany, or updateOne
// Two arguments required
    // The query object (our id in this case)
    // An object, with $set key, and our new info
    // Note the structure, as db.dbName.updateOne({query}{object})
db.animals.updateOne(
    {_id: ObjectId('6086ff04da4466072b3e1a2d')},
    {$set: {name: 'Pip'} }
);


//---------------- DELETE --------------------
// Can deleteMany or deleteOne, takes in _id as above
db.animals.deleteOne({_id: ObjectId('6086ff04da4466072b3e1a2d')})