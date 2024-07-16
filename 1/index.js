let students = [];
// Agregar los primeros 5 nombres de la lista
students,push('Junior', 'Carlos', 'Sergio', 'Darwin', 'Ian');
//Agregar a Mateo al inicio de la lista
students.unshift('Mateo');
students.pop();
alert(students);

// Metodo para encontrar a Mateo
let itemFind = students.find(item => item='Carlos');