import express from 'express';
import cors from 'cors';
import axios from 'axios'

const app = express();
const port = 5000;


// {
//   origin: ['https://www.bemneterbeto.com', 'http://localhost:5000', 'http://localhost:5173'],
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   optionsSuccessStatus: 204,
// }
app.use(cors());

app.get('/api', async (req, res) => {
  try {
    const num_key = '179dfdf98e96cabf64e5f438ddfb7e14'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=27.9517&lon=-82.4588&appid=${num_key}`);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));

