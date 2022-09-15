import express from 'express'; //ESmodules
//const express = require('express'); -> commongjs
import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils';

const router = express.Router();


router.get('/', (_req, res) => {
 res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {

    const diary = diaryServices.findById(Number(req.params.id));
    
    if (diary != null) {
        res.send(diary)
    }else{
        res.sendStatus(404)
    }
});



router.post('/', (req, res) => {
    try {
         const newDiaryEntry = toNewDiaryEntry(req.body);

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
       
        res.json(addedDiaryEntry)
    } catch (err) {
        if (err instanceof Error) {
          // ✅ TypeScript knows err is Error
          res.status(400).send(err.message)
        } else {
          console.log('Unexpected error', err);
        }
      }

});

export default router