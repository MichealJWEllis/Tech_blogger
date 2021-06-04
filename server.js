const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
})
);
// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//   res.render('create_post')
// })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('assets/images'))

app.use(require('./routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});