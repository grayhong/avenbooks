import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/buy', async(req, res) => {
  const { sellerID } = req.query;

  const sql = `select * from trade as t inner join \
                ( select * from selling where sellerid=${sellerID} ) as s \
                where s.sellingid = t.sellingid;`;
  
  try {
    const buy_list = await query(sql, true);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(200).json(buy_list);
});

router.post('/confirm', async (req, res) => {
  const { sellingID, buyerID } = req.body;
  
  const sql = `UPDATE TRADE SET Confirmed=true WHERE SellingID=${sellingID} && BuyerID = ${buyerID}`;
  
  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully made confirmation!`);
});

router.post('/buy', async (req, res) => {
  const { sellingID, buyerID } = req.body;
  
  const sql = `INSERT INTO TRADE (SellingID, BuyerID, Confirmed)\
                          VALUES (${sellingID}, ${buyerID}, false)`
  
  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully made buy request!`);
});


export default router;