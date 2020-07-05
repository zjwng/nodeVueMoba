module.exports = app => {
    // import express from 'express';
    const express = require('express');

    const router = express.Router({
        mergeParams:true
    });

    const Category = require("../../models/Category")
// console.dir(Category)
    router.post('/', async (req, res) => {
        // console.log(req.body);
        // res.send(req.body)
        const model = await req.model.create(req.body);
        res.send(model)
    });

    router.put('/:id', async (req, res) => {
        // console.log(req.body);
        // res.send(req.body)
        const model = await req.model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model)
    });

    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.model.modelName === "Category") {
            queryOptions.populate = "parent"
        }
        const model = await req.model.find().setOptions(queryOptions).limit(10);
        res.send(model)
    });

    router.get('/:id', async (req, res) => {
        const model = await req.model.findById(req.params.id);
        res.send(model)
    });

    router.delete("/:id", async (req, res) => {
        await req.model.findByIdAndDelete(req.params.id, req.body);
        res.send({
            success: true
        })
    })
    
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        // console.log(req.params.resource)
        const modelName = require("inflection").classify(req.params.resource);
        req.model = require(`../../models/${modelName}`);

        // console.log(model)
        next()
    }, router);

    const multer = require("multer");

    const upload = multer({
        dest: __dirname + "/../../uploads"
    })

    app.post("/admin/api/upload",  upload.single("file"), (req, res) => {
        // console.log("接受请求")
        const file = req.file;
        const url = `http://localhost:3000/upload/${file.filename}`
        res.send(url)
    })
}