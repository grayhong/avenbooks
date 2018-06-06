import express from 'express';
import query from '../query';
import saveImageSync from '../utils';

const router = express.Router();

router.get('/sell', async (req, res) => {
  const { bookID = '', sellerID = '' } = req.query;

  let sql = '';
  let sell_list;

  if (sellerID) {
    sql = `SELECT * FROM BOOK natural join (SELECT * FROM SELLING WHERE SellerID=${parseInt(sellerID)}) as a order by SellingTime`;
  }
  else if (bookID) {
    sql = `SELECT SellingID, Name as SellerName, BookID, SellerID, Price, SellingTime FROM Student \
                  natural join (SELECT * FROM SELLING WHERE BookID=${parseInt(bookID)}) as b ORDER BY Price`;
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
  const sql = `INSERT INTO SELLING(BookID, Edition, SellerID, Price, Finished)\
               VALUES(${parseInt(bookID)}, ${parseInt(edition)}, ${parseInt(sellerID)}, ${parseInt(price)}, false); \
               SELECT LAST_INSERT_ID() as ID;`
  
  let id, url;

  try {
    id = await query(sql, true);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  // time을 이름으로 사진 저장
  const getID = '';

  // try {
  //   id = await query(getID, true);
  // } catch (err) {
  //   return res.status(500).end(err.message);
  // }

  console.log(id);
  const fileName = `sell_${id[1][0]['ID']}.jpeg`;
  
  try {
    url = await saveImageSync(base64, fileName);
  } catch (err) {
    console.log('erororor')
    return res.status(500).end(err.message);
  }

  res.status(200).json({ id, url });
});

router.delete('/sell/:sellingID', async (req, res) => {
  const { sellingID } = req.params;
  const sql = `DELETE FROM Selling where SellingID=${sellingID};`

  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully deleted selling request: ${sellingID}`);
});


export default router;
