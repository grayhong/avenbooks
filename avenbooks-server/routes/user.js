import express from 'express';
import query from '../query';

const router = express.Router();

// router.get('/users', async (req, res) => {
//   const { sid } = req.query;

//   const sql = `SELECT * FROM STUDENT WHERE StudentID = ${sid}`

//   try {
//     user = await query(sql);
//   } catch (err) {
//     return res.status(500).end(err.message);
//   }
//   const { password, ...userWithoutPassword } = user;
//   res.json(userWithoutPassword);
// });


router.post('/register', async (req, res) => {
  const { sid, password, name, phoneNumber } = req.body;
  if (!sid || !name || !password || !phoneNumber) return res.status(400).end('sid, name, phone number, password should be given.');
  // 400 when already registered
  // if (await UserModel.findOne({ id })) return res.status(400).end('Duplicate id.');
  console.log('register');
  const sql = `INSERT INTO Student(StudentID, Password, Name, PhoneNumber)\
                            VALUES(${parseInt(sid)}, ${password}, ${name}, ${phoneNumber})`
  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully created a new user: ${sid}`);
});

router.post('/login', async (req, res) => {
  const { sid, password } = req.body;

  const sql = `SELECT * FROM Student WHERE StudentID=${sid} && Password = ${password};`
  
  try {
    user = await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  if (!user) return res.status(401).end();
  const { password: _, ...userWithoutPassword } = user;
  res.status(200).json(userWithoutPassword);
});

export default router;