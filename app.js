const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const {adminRoutesHandler}  = require('./routes/admin');
const { shopRoutesHandler } = require('./routes/shop');
const { rootDir } = require('./util/path');


const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutesHandler);

app.use(shopRoutesHandler);

app.use((request, response, next) => {
    response.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

app.listen(3000);