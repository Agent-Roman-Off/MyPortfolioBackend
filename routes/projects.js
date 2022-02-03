const express = require('express');
const { db } = require('../conf');

const router = express.Router();

router.get('/2021', async (req, res) => {
  try {
    const [projects] = await db.query(
      `SELECT id, title, picture, link, date 
      FROM projects 
      WHERE date BETWEEN '2021-01-01' AND '2021-12-31' 
      ORDER BY date DESC`
    );
    if (projects.length) {
      res.status(200).json(projects);
    } else {
      res.status(404).send('Projects not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving the projects');
  }
});

router.get('/2022', async (req, res) => {
  try {
    const [projects] = await db.query(
      `SELECT id, title, picture, link, date 
      FROM projects
      WHERE date BETWEEN '2022-01-01' AND '2022-12-31'
      ORDER BY date DESC`
    );
    if (projects.length) {
      res.status(200).json(projects);
    } else {
      res.status(404).send('Projects not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving the projects');
  }
});

router.get('/2023', async (req, res) => {
  try {
    const [projects] = await db.query(
      `SELECT id, title, picture, link, date 
      FROM projects
      WHERE date BETWEEN '2023-01-01' AND '2023-12-31'
      ORDER BY date DESC`
    );
    if (projects.length) {
      res.status(200).json(projects);
    } else {
      res.status(404).send('Projects not found');
    }
  } catch (err) {
    res.status(500).send('Error retrieving the projects');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [project] = await db.query(
      `SELECT id, title, picture, link, date, nbrPeople, timeLimit FROM projects WHERE id = ?`,
      [id]
    );

    res.status(200).json(project);
  } catch (err) {
    res.status(500).send('Error retrieving the project');
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, picture, link, date, nbrPeople, timeLimit } = req.body;
    await db.query(
      `INSERT INTO projects (title, picture, link, date, nbrPeople, timeLimit) VALUES (?, ?, ?, ?, ?, ?)`,
      [title, picture, link, date, nbrPeople, timeLimit]
    );
    res.status(201).send('Project created');
  } catch (err) {
    res.status(500).send('Error creating the project');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.query(`DELETE FROM projects WHERE id = ?`, [id]);
    res.status(200).send('Comment succesfully deleted');
  } catch (err) {
    res.status(500).send('Error deleting the project');
  }
});

module.exports = router;
