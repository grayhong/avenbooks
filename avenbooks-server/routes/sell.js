import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/sell', async (req, res) => {
  const { bookID = '', sellerID = '' } = req.query;

  let sql = '';

  if (sellerID) {
    sql = `SELECT * FROM SELLING WHERE SellerID=${parseInt(sellerID)}`;
  }
  else if (bookID) {
    sql = `SELECT * FROM SELLING WHERE BookID=${parseInt(bookID)} ORDER BY Price`;
  }
  else {
    sql = 'SELECT * FROM SELLING';
  }

  try {
    sell_list = await query(sql, true);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(200).json(sell_list);
});

router.post('/sell', async (req, res) => {
  const { bookID, sellerID, price, edition } = req.body;
  const sql = `INSERT INTO SELLING(BookID, Edition, SellerID, Price)\
               VALUES(${parseInt(bookID)}, ${parseInt(edition)}, ${parseInt(sellerID)}, ${parseInt(price)})`
  
  // time을 이름으로 사진 저장

  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully uploaded book!`);
});


export default router;