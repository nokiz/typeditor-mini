import * as fs from 'fs';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let content = '';

function startEditor() {
  console.log('Bienvenido al Editor de Texto Simple');
  rl.question('Ingrese el nombre del archivo: ', (filename: string) => {
    rl.prompt();

    rl.on('line', (line: string) => {
      if (line.trim() === '.fin') {
        saveToFile(filename);
        rl.close();
        console.log('Edición finalizada. Archivo guardado.');
      } else {
        content += line + '\n';
      }
    });
  });
}

function saveToFile(filename: string) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
    } else {
      console.log('Contenido guardado correctamente.');
    }
  });
}

startEditor();
