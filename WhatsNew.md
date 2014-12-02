#Treble - What's new#

##v 0.0.6 logging method##
You can activate logging (default value is desactivated):
```javascript
var Treble = require("treble"),
    db3 = Treble( require("sequelize"),"database","username","password","host",port).logging(true);
```

##v 0.0.4 Now *sequelize* available in the output##
You can get the sequelize paquege at ```db3.sequelize```.

##v 0.0.3 Removing *sequelize* dependency##
Now no any dependency. Sequelize should be provided as a parameter in the constructor call: 
```javascript
var db3=require("treble")(require("sequelize"),"database","username","password","host",port);
```

##v 0.0.2 Using sequelize package##
Dependency change : the package 'sequilize-mysql'(deprecated) is replaced by 'sequilize'.

##v 0.0.1 Initial version##
Handling 3 mySql databases using 'sequelize' ORM ('admin','modele' and 'user' databases).
