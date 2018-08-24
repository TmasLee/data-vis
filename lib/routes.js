import express from 'express';
import path from 'path';

let router = express.Router();

router.use('/*', (req,res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

export default router;