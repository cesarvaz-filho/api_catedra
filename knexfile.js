// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: {
      host: "ec2-34-200-94-86.compute-1.amazonaws.com",
      database: "daveol1c3sn28q",  //nex_catedra
      user: "qmfpgtmxrlwful",  //postgres
      password: "8ee1132f35ccca83e0fac5a23b5692b20f7abfb70b1798a9cd247d5624912bfe"  //admin
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
