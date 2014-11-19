# treble #

**treble** is a very basic *node.js* package that permits to handle 3 mySql databases at the same time using Sequelize ORM. Theses databases are named 'admin', 'modele' and 'user'. 

## How does it work ? ##
You have to initialize tha package by giving information about the admin database. 2 syntaxes are possible :
```javascript
var treble = require("treble");
var db3=treble("mysql://user:pass@example.com:9821/dbname");
```

or

```javascript
var treble = require("treble");
var db3=treble("database","username","password","host");

db3.modele("database","username","password","host");
db3.user("database","username","password","host");
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
function access( db ) {
    return db3.get(db)
}
var admin = db3.get('admin');
var modele = db3.get();
var user = db3.user();
```

This tiny package has been written in order to be used in a much bigger project but still can be useful.