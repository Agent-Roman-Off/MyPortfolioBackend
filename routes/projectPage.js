const express = require('express');
const { db } = require('../conf');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [project] = await db.query(
      `SELECT id, title, picture, link, date 
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
