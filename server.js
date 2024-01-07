const express = require('express');
const cors = require('cors');  // Import the cors middleware
const { MongoClient } = require('mongodb');
const app = express();
const PORT =  3000;

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'SurveyInfo';
const collectionName = 'Responses';
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application if there's an error connecting to MongoDB
  });


app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());

app.get('/api/averageRating', async (req, res) =>
{
    try{
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        //this is how we fetch all the responses
        const responses = await collection.find().toArray();

        //Extract ratings from responses
        const ratings = responses.map(section => section.rating);

        //calculate average Rating; loops over rating array and adds the ratings and adds them to sum and divides by total num of ratings
        //if the array is empty than the entire expression is evaluated to 0
        const averageRating = ratings.length > 0 ? ratings.reduce((sum, rating) => sum + rating, 0)/ ratings.length : 0;

        console.log('Responses:', responses);
        console.log('Ratings:', ratings);
        console.log('Average Rating:', averageRating);
    
        res.json({averageRating});
    }catch(error){
        console.error('Error:',error);
        res.status(500).json({message: 'Internal Server Error'});
    }

});

app.post('/api/responses', async (req, res) => {
  try {
    console.log('Recived data:', req.body);
    //const client = new MongoClient(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
    //await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);


    const response = req.body;
    await collection.insertOne(response);

    console.log('Response saved successuflly');

    res.status(201).json({ message: 'Response saved successfully.' });
  } catch(error)
    {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
