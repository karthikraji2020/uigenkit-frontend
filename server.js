const express = require('express');

const app = express();

app.use(express.static('./dist/uigenkit-frontend'));
app.use(express.json());
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/uigenkit-frontend/'}),
);

app.listen(process.env.PORT || 8080);