const path = require('path');
const express = require('express');
const { rootDir } = require('../util/path');
const router = express.Router();

router.get('/add-product',(request, response, next)=>{
    console.log("In the middleware!!!");
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
});

module.exports = {
    adminRoutesHandler : router
};