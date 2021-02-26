const express = require('express');

const routes = require('./routes/ecommerce.route');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/category', routes.categoryRouter);
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
