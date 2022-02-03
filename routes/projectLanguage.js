const express = require('express');
const { db } = require('../conf');

const router = express.Router();

// FOR FR VERSION, NOT DONE YET
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [project] = await db.query(
      `SELECT id, title, picture, link, date, nbrPeople, timeLimit 
      FROM projects 
      INNER JOIN contents ON projects.id = contents.idproject
      WHERE id = ?`,
      [id]
    );
    if (project.length) {
      res.status(200).json(project);
    } else {
      res.status(404).send('Project not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving the project');
  }
});

// FOR EN VERSION, NOT DONE YET
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [project] = await db.query(
      `SELECT id, title, picture, link, date, nbrPeople, timeLimit 
      FROM projects 
      INNER JOIN contents ON projects.id = contents.idproject
      WHERE id = ?`,
      [id]
    );
    if (project.length) {
      res.status(200).json(project);
    } else {
      res.status(404).send('Project not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving the project');
  }
});
module.exports = router;
