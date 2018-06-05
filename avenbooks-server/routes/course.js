import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/course', async (req, res) => {

  const sql = `select * from course natural join\ 
                ( select * from book as b natural join\ 
                  ( select bookid, min(price) as min_price \
                    from selling group by bookid ) as s) as c`;
  console.log(sql)
  let book_list;
  try {
    book_list = await query(sql, true);
  } catch (err) {
    return res.status(500).end(err.message);
  }
  console.log(book_list)

  res.status(200).json(book_list);
});

export default router;
