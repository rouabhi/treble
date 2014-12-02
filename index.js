var databases = {}, Sequelize;

function getDB(db) {
	switch (db){
		case "a":
		case "admin" : db = "admin";break;
		case "m":
		case "modele" : db = "modele";break;
		case "u":
		case "user" : db = "user";break;
		default : return null;
	}
	if (!databases[db]) return null;
	if (databases[db] && !databases[db].length) return databases[db];
	var dbname = databases[db][0],
		dbuser = databases[db][1],
		dbpass = databases[db][2],
		dbhost = databases[db][3],
		dbport = databases[db][4];
	if (!dbuser) databases[db] = new (Sequelize)(dbname, {language:'en',
						 logging:this.log, 
						 define:{freezeTableName: true}});
	else databases[db] = new (Sequelize)(dbname,dbuser,dbpass, {host:dbhost, port:dbport, language:'en',
						 logging:this.log, 
						 define:{freezeTableName: true}});
	return databases[db];
}
			
function setgetAdminDB(db,user,pass,host,port) {
	 if (db) databases.admin=[db,user,pass,host,port];
	 else return getDB("admin");
}
function setgetModeleDB(db,user,pass,host,port) {
	 if (db) databases.modele=[db,user,pass,host,port];
	 else return getDB("modele");
}
function setgetUserDB(db,user,pass,host,port) {
	 if (db) databases.user=[db,user,pass,host,port];
	 else return getDB("user");
}

module.exports = function ( sequelize, db, user, pass, host, port ) {
	 Sequelize = sequelize;
	 databases.admin = [db , user, pass , host , port];
	 return {
		 modele:setgetModeleDB,
		 user:setgetUserDB,
		 admin:setgetAdminDB,
		 get:getDB,
		 sequelize:sequelize,
		 log:false,
		 logging:function(log){this.log = log ? console.log:false; return this;}
	}
}