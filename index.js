const express = require('express');
const path = require('path');
const cors = require('cors');
const { backPort } = require('./conf');
const projectsRoutes = require('./routes/projects');
const projectLanguage = require('./routes/projectLanguage');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/projects', projectsRoutes);
app.use('/projectLanguage', projectLanguage);

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(backPort, () => {
  console.log(`My Portfolio is now available on ${backPort}!`);
});
