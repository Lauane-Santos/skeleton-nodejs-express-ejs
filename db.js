let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://tqjkmubi:387-cJFadyVqa54A6l3e5bOOzOtNDhau@kesavan.db.elephantsql.com/tqjkmubi"
  });
  
  global.connection = pool;
  return pool.connection();
}

module.exports = { connect }