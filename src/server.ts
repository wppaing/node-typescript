import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.setHeader('X-Powered-By', 'ASP.NET');
  return res.json({
    message: 'success',
  });
});

app.listen(5555, () => {
  console.log(`Server listening on port 5555`);
});
