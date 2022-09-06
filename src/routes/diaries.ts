import express from 'express'; //ESmodules
//const express = require('express'); -> commongjs
import * as diaryServices from '../services/diary'

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



router.post('/', (_req, res) => {
 res.send('saving a diaries...');
});

export default router