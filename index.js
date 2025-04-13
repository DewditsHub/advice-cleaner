const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Advice Slip endpoint
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

// Truth or Dare (Dare) endpoint
app.get('/dare', async (req, res) => {
  try {
    const response = await axios.get('https://api.truthordarebot.xyz/v1/dare');
    const dare = response.data.question;
    res.set('Content-Type', 'text/plain');
    res.send(dare);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Dare ya to try again—something broke!');
  }
});

// Riddle endpoint
app.get('/riddle', async (req, res) => {
  try {
    const response = await axios.get('https://riddles-api.vercel.app/random');
    const riddle = response.data.riddle;
    res.set('Content-Type', 'text/plain');
    res.send(riddle);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Riddle me this: try again later!');
  }
});

// Kanye Quote endpoint
app.get('/kanye', async (req, res) => {
  try {
    const response = await axios.get('https://api.kanye.rest/');
    const quote = response.data.quote;
    res.set('Content-Type', 'text/plain');
    res.send(quote);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Ye’s quiet—try again!');
  }
});

// Ron Swanson Quote endpoint
app.get('/ronswanson', async (req, res) => {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const quote = response.data[0]; // Extract first quote from array
    res.set('Content-Type', 'text/plain');
    res.send(quote);
  } catch (error) {
    res.set('Content-Type', 'text/plain');
    res.send('Ron’s out fishing—try again!');
  }
});

app.listen(port, () => console.log(`Running on port ${port}`));
