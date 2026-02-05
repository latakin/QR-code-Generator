

import inquirer from 'inquirer';
 import qr from 'qr-image';
 import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'qrcode',
      message: 'What URL do you want to convert?',
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const qr_png = qr.image(answers.qrcode, { type: 'png' });
    qr_png.pipe(fs.createWriteStream(`${answers.qrcode}.png`));

    writeToFile(answers.qrcode);


 
    //var svg_string = qr.imageSync(answers, { type: 'svg' });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("unaable to generate qr")
    } else {
      // Something else went wrong
      console.log("something else has gone wrong")
    }
  });


  function writeToFile(parameter) {
    fs.writeFile('urls.txt', parameter, 'utf8', (err) => {
        if(err) throw err;
        console.log('url name saved successfully');
    }); 
  } 
 
 
