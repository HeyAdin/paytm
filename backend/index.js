const express = require('express');
const app = express();
const PORT = 8001;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mainRouter = require('./routes/index')
app.use('/api/v1', mainRouter);

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`)
}
);

