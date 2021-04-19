const app = require('./config/app');

// Init environment variables
const PORT = process.env.PORT || 4000;

// Init server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
