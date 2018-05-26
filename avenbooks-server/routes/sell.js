import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/sell', async (req, res) => {
  const { bookID = '', sellerID = '' } = req.query;

  let sql = '';

  if (sellerID) {
    sql = `SELECT * FROM SELLING WHERE SellerID=${sellerID}`;
  }
  else if (bookID) {
    sql = `SELECT * FROM SELLING WHERE BookID=${bookID} ORDER BY Price`;
  }
  else {
    sql = 'SELECT * FROM SELLING';
  }

  try {
    sell_list = await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(200).json(sell_list);
});

router.post('/sell', async (req, res) => {
  const { bookID, sellerID, price, edition } = req.body;
  
  let starttime = new Date();
  let fixedtime = new Date(starttime.getTime()-(starttime.getTimezoneOffset()*60000));
  
  const time = fixedtime.toISOString().slice(0, 19)
  const dateTime = time.replace('T', ' ');
  const sql = `INSERT INTO SELLING(BookID, Edition, SellerID, Price, Time)\
               VALUES(${bookID}, ${edition}, ${sellerID}, ${price}, ${dateTime})`
  
  // time을 이름으로 사진 저장

  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully uploaded book!`);
});


export default router;