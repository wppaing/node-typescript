import express from 'express';

const app = express();

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.setHeader('server', 'deno');
  return res.json({
    message: 'success',
  });
});

app.listen(5555, () => {
  console.log(`Server listening on port 5555`);
});
