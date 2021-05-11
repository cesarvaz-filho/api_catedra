
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'abispo', password: '123'},
        {username: 'amatos', password: '123'},
        {username: 'ajesus', password: '123'},
        {username: 'aaraujo', password: '123'},
        {username: 'amendes', password: '123'},
        {username: 'aribeiro', password: '123'},
        {username: 'apires', password: '123'},
        {username: 'cabreu', password: '123'},
        {username: 'dteixeira', password: '123'},
        {username: 'dmoreira', password: '123'},
        {username: 'dnunes', password: '123'},
        {username: 'esilva', password: '123'},
        {username: 'eellen', password: '123'},
        {username: 'foliveira', password: '123'},
        {username: 'fsilva', password: '123'},
        {username: 'fgpedreira', password: '123'},
        {username: 'haugusto', password: '123'},
        {username: 'icsoares', password: '123'},
        {username: 'jgcardoso', password: '123'},
        {username: 'jvaz', password: '123'},
        {username: 'lramos', password: '123'},
        {username: 'laraujo', password: '123'},
        {username: 'lcerqueira', password: '123'},
        {username: 'lcarneiro', password: '123'},
        {username: 'lsilva', password: '123'},
        {username: 'mneri', password: '123'},
        {username: 'mcosta', password: '123'},
        {username: 'nsilva', password: '123'},
        {username: 'nasantos', password: '123'},
        {username: 'sanjos', password: '123'},
        {username: 'spsilva', password: '123'},
        {username: 'wcharles', password: '123'},
        {username: 'kgoncalves', password: '123'},
        {username: 'wteixeira', password: '123'},
        {username: 'lvinhas', password: '123'},
        {username: 'dpereira', password: '123'},
        {username: 'gcasaes', password: '123'},
        {username: 'amarinho', password: '123'},
        {username: 'gcerqueira', password: '123'},
        {username: 'loliveira', password: '123'},
        {username: 'gpaz', password: '123'},
      ]);
    });
};
