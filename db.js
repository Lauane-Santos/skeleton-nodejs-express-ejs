let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://qnygplek:2iRfM2S1y5oPXFU_DJym2hboFJ9wZhJT@kesavan.db.elephantsql.com/qnygplek"
  });
  
  global.connection = pool;
  return pool
}

module.exports = { connect }