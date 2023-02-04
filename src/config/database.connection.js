const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://ini_admin:ini_admin@tokotoko-api.7vh0j38.mongodb.net/?retryWrites=true&w=majority'
);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('db connection success');
});
