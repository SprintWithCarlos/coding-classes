show dbs

use SWC_clases



db.createCollection('usuarios')

show collections

db.usuarios.insert(
  {
    nombre: 'George',
    apellido: 'Harrison'
  }
)

db.usuarios.find()
  .pretty()

db.usuarios.insert(
  [
    {nombre: 'Paul', apellido: 'McCartney'},
    {nombre: 'Ringo', apellido: 'Starr'},
    {nombre: 'John', apellido: 'Lennon'}
  ]
)

db.usuarios.find();
db.usuarios.find({nombre: 'Paul'}, {nombre: true, apellido:false});

// actualizar datos
db.usuarios.update(
  {nombre: 'Paul'}, //consulta
  {
    nombre: 'Paul',
    apellido: 'McCartney',
    instrumento: 'bajo'
  } 
);


db.usuarios.update(
  {nombre: 'John'},
  {
    $set: {instrumento: 'guitarra'}
  }
);

db.usuarios.update(
  {nombre: 'George'},
  {
    $set: {instrumento: 'guitarra'}
  }
);
db.usuarios.update(
  {nombre: 'Ringo'},
  {
    $set: {instrumento: 'bateria'}
  }
);





db.usuarios.update(
  {nombre: 'Paul'},
  {
    $rename: {"instrumento": "instrumento musical"}
  }
)

db.usuarios.remove({nombre: "Paul"})
db.usuarios.remove({nombre: "Paul"}, {justOne: true})

db.usuarios.find({nombre: "John"});
db.usuarios.find({$or: [{nombre: "John"}, {nombre: "Paul"}]})
db.usuarios.find({'instrumento': 'guitarra'})



db.usuarios.find({
    apellido: {$regex: 'on$'}});

// sorting
db.usuarios.find().sort({apellido: 1});
db.usuarios.find().sort({apellido: -1});
db.usuarios.find().count()
db.usuarios.find({instrumento: "guitarra"}).count()
db.usuarios.find().limit(3)
db.usuarios.find().limit(3).sort({apellido: -1})

