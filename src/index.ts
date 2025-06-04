import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'}).split('\n')
  .map((row:string):string[] => {
    return row.split(',');

  }) //return a; string to us

  console.log(matches)