const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Advice Slip endpoint (existing)
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

// Yo Mama endpoint
app.get('/yomama', async (req, res) => {
  try {
    const response = await axios.get('https://api.yomama.info');
    const joke = response.data.joke;
    res.set('Content-Type', 'text/plain');
    res.send(joke);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Yo mama so broke, she can’t even afford a comeback!');
  }
});

// Useless Facts endpoint
app.get('/uselessfact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = response.data.text;
    res.set('Content-Type', 'text/plain');
    res.send(fact);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Fact machine’s jammed, try later!');
  }
});

app.listen(port, () => console.log(`Running on port ${port}`));
