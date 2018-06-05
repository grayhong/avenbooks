import express from 'express';
import query from '../query';

const router = express.Router();

router.get('/buy', async(req, res) => {
  const { sellerID='', buyerID='' } = req.query;

  // const sql = `select * from trade as t inner join \
  //               ( select * from selling where sellerid=${parseInt(sellerID)} ) as s \
  //               where s.sellingid = t.sellingid;`;

  let sql, buy_list;
  
  if (sellerID) {
    sql = `select SellingID, BookName, StudentID as BuyerID, Time, Price, PhoneNumber, Name as BuyerName, Finished \
            from student natural join (select SellingID, BookName, BuyerID as StudentID, Time, Price, Finished  \
            from book as st natural join (select * from trade as t natural join \
            ( select * from selling where sellerid=${parseInt(sellerID)}) as s) as t) as bt order by Time`;

  } else {
    sql = `select SellingID, BookName, StudentID as SellerID, Time, Price, PhoneNumber, Name as SellerName, Confirmed \
            from student natural join (select SellingID, BookName, SellerID as StudentID, Time, Price, Confirmed \
            from book as st natural join (select * from selling as t natural join \
            (select * from trade where buyerid=${parseInt(buyerID)}) as s) as ut) as bt order by Time`;
  }
  console.log(sql);
  
  try {
    buy_list = await query(sql, true);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(200).json(buy_list);
});

router.put('/confirm/:sellingID/:buyerID', async (req, res) => {
  
  const sql = `UPDATE TRADE SET Confirmed=true WHERE SellingID=${parseInt(sellingID)} && BuyerID = ${parseInt(buyerID)}`;
  
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
                          VALUES (${parseInt(sellingID)}, ${parseInt(buyerID)}, false)`
  console.log(sql)
  
  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully made buy request!`);
});

router.delete('/buy/:sellingID/:buyerID', async (req, res) => {
  const sql = `DELETE FROM TRADE where SellingID=${sellingID} && BuyerID=${buyerID}`

  try {
    await query(sql);
  } catch (err) {
    return res.status(500).end(err.message);
  }

  res.status(201).end(`Successfully deleted buying request: SellingID=${sellingID} && BuyerID=${buyerID}`);
});


export default router;
