
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'AMANDA DOS SANTOS BRITO', 
          registration: '1403556', 
          login: 'T6635807', 
          cpf: '06117618581', 
          entry_time: '08:00:00', 
          supervisor: 'JACKSON SANTOS', 
          coordinator: 'MARGARETE GOMES', 
          status: 'Ativo', 
          id_group: 1 //CABO - OCORRENCIAS NET
        },
        {
          name: 'ANA CAROLINA MIRANDA DE SOUZA', 
          registration: '1403557', 
          login: 'T6635808', 
          cpf: '06117618589', 
          entry_time: '08:00:00', 
          supervisor: 'JACKSON SANTOS', 
          coordinator: 'MARGARETE GOMES', 
          status: 'Ativo', 
          id_group: 1 //CABO - OCORRENCIAS NET
        },
      ]);
    });
};
