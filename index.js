const express = require('express');
const cors = require('cors');
const { backPort } = require('./conf');
const projectsRoutes = require('./routes/projects');
// const projectPage = require('./routes/projectPage');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/projects', projectsRoutes);
/* route should be smth like /projects:id/desc?lang=FR */
// app.use('', projectPage);

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(backPort, () => {
  console.log(`My Portfolio is now available on ${backPort}!`);
});
