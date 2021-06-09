const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

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

const helpers = require('./utils/helpers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('assets/images'))

app.use(require('./routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});