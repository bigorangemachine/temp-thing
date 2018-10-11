import express from 'express';

const app = express();

const startServer = port => new Promise((resolve, reject) => {
  app
    .listen(port, () => {
      console.log(`Listening on port ${port}`);
      resolve();
    })
    .on('error', reject);
});

app.all('*', (req, res) => res.json({ timestamp: new Date(), requestBody: { ...req.body } }));

startServer(process.env.PORT || 3000);
