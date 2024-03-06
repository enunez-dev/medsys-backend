const { Pool } = require('pg');

// URL de conexión a la base de datos
const connectionString = 'postgres://root:9UXesKV3MY5e80zF1sIkRwfkdCzkjSVV@dpg-cnjnenvsc6pc73fsdcbg-a.oregon-postgres.render.com/citamedica_bk7h';

// Configuración de la conexión a la base de datos utilizando la URL
const pool = new Pool({
  connectionString: connectionString,
  ssl: true // Habilita SSL/TLS
});

// Función para ejecutar una consulta SQL
const executeQuery = async (query, values) => {
  const client = await pool.connect(); // Obtener una conexión del pool
  try {
    const result = await client.query(query, values); // Ejecutar la consulta
    console.log(JSON.stringify(result))
    return result; // Devuelve las filas resultantes de la consulta
  } finally {
    client.release(); // Liberar la conexión para que pueda ser usada nuevamente
  }
};

const transaction = async () => {
  const client = await pool.connect();
  return {
    begin: async () => {
      await client.query('BEGIN')
    },
    query: async (query, values=[]) => {
      const { rows, rowCount} = await client.query(query, values)
      return { rows, rowCount}
    },
    commit: async () => {
      await client.query('COMMIT')
    },
    rollback: async () => {
      await client.query('ROLLBACK')
    },
    release: () => {
      client.release()
    }
  }
}

const connect = async () => {
  return await pool.connect();
}

module.exports = {
  executeQuery,
  connect,
  transaction
};
