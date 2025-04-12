const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/advice', async (req, res) => {
  try {
    const response = await axios.get('http://api.adviceslip.com/advice');
    const advice = response.data.slip.advice;
    res.set('Content-Type', 'text/plain');
    res.send(advice);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Chill, something broke. Try again!');
  }
});

app.listen(port, () => console.log(`Running on port ${port}`));