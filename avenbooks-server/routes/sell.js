import express from 'express';
import query from '../query';
import saveImageSync from '../utils';

const router = express.Router();

router.get('/sell', async (req, res) => {
  const { bookID = '', sellerID = '' } = req.query;

  let sql = '';
  let sell_list;

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
  const { bookID, sellerID, price, edition, base64 } = req.body;
  const sql = `INSERT INTO SELLING(BookID, Edition, SellerID, Price)\
               VALUES(${parseInt(bookID)}, ${parseInt(edition)}, ${parseInt(sellerID)}, ${parseInt(price)})`
  
  let id, url;

  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  // time을 이름으로 사진 저장
  const getID = 'SELECT LAST_INSERT_ID();';

  try {
    id = await query(getID);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  const fileName = `${bookID}_${id}.jpg`;
  
  try {
    url = await saveImageSync(base64, fileName);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(200).json({ id, url });
});


export default router;
