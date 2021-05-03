const fs = require('fs');
const csvParse = require('csv-parse');
const knex = require('../database');

module.exports = {
  async createRegister(request, response) {
    function stringToMinutes( string ) {
      const numeros = string.split(":")
      return ( +(numeros[0]) * 60 + +(numeros[1]) + +(numeros[2])/60 )
    }
    const { file } = request;
    
        
    const stream = fs.createReadStream(file.path);
    const parseFile = csvParse({ delimiter: ';' });

    stream.pipe(parseFile);

    parseFile
      .on("data", async (line) => {
        const [ 
          name,
          registration, 
          login, 
          cpf, 
          id_group, //serviço
          subject,
          status,
          entry_time, 
          supervisor, 
          coordinator,
          workload,
          status_training
        ] = line;
        
        await knex('students').insert({name, registration, login, cpf, id_group: 1, entry_time, supervisor, coordinator, status});
        await knex('trainings').insert({name: subject, status: status_training, workload: stringToMinutes(workload), start_date: "2021-04-27", end_date: "2021-04-27", adherance: 0});
        //await knex('training_student')
        
        return response.status(201).send();
      })
      .on("end", () => {
        fs.promises.unlink(file.path);
      })
      .on("error", (err) => {
        console.log(err)
      });
    
  },
}