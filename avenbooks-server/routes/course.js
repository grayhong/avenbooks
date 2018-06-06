import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/course', async (req, res) => {

  const sql = `select * from course natural join\ 
                ( select * from book as b left join\ 
                  ( select bookid as s_bookid, min(price) as min_price \
                    from ( select * from selling where finished != true) as temp group by bookid ) as s \
                    on b.bookid = s.s_bookid) as c`;

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

router.get('/book', async (req, res) => {
  const { bookID = '' } = req.query;

  const sql = `select * from book where BookID=${bookID}`;

  let bookInfo;
  try {
    bookInfo = await query(sql, true);
  } catch (err) {
    return res.status(500).end(err.message);
  }
  console.log(bookInfo)

  res.status(200).json(bookInfo[0]);
});

export default router;
