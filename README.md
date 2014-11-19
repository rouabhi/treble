# treble #

**treble** is a very basic *node.js* package that permits to handle 3 mySql databases at the same time using Sequelize ORM. Theses databases are named 'admin', 'modele' and 'user'. 

## How does it work ? ##
You have to initialize tha package by giving information about the admin database. 2 syntaxes are possible :
```javascript
var treble = require("treble");
var Sequelize = require("sequelize");

var db3=treble(Sequelize, "mysql://user:pass@example.com:9821/dbname");
```

or

```javascript
var treble = require("treble");
var Sequelize = require("sequelize");

var db3=treble(Sequelize,"database","username","password","host",port);

db3.modele("database","username","password","host",port);
db3.user("database","username","password","host",port);
```

You can then get the *sequelize* objet for each database:
```javascript
var admin = db3.admin();
var modele = db3.modele();
var user = db3.user();
```
Each database is opened and synced only when invoked for the first time.

You can also use this syntax :
```javascript
var admin = db3.get('admin');
var modele = db3.get('modele');
var user = db3.get('user');
```

With this syntax you can access to a desired database, selected by an argument:

```javascript
  // "db" is one of the values: 'admin','modele','user'
  // Also can be used the values : 'a', 'm' or 'u' instead
function access( db ) {
    return db3.get(db)
}
```

This tiny package has been written in order to be used in a much bigger project but still can be useful.