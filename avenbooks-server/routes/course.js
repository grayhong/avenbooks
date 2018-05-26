import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/course', async (req, res) => {

  const sql = 'select *  from course natural join\ 
                ( select * from book as b left join\ 
                  ( select bookid as s_bookid, min(price) as min_price \
                    from selling group by bookid ) as s \
                  on b.bookid = s.s_bookid ) as c';

  try {
    book_list = await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(200).json(book_list);
});

export default router;