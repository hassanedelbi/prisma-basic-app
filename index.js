const express = require('express');
const app = express();
app.use(express.json());

app.use('/api/user', require('./routes/user'));
app.use('/api/post', require('./routes/post'));
app.listen(3000, () => {
	console.log('listening on 3000!');
});
