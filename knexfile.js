// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,

    connection: {
      filename: "./data/data.db3",
    },

    migrations: {
      directory: "./data/migrations",
    },

    seed: {
      directory: "./data/seeds",
    },
    // this is needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },
};
