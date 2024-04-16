import * as fs from 'fs';
import * as path from 'path';
import pkg from '@prisma/internals';
const { getDMMF } = pkg;

const getJSON = async () => {
  const datamodel = fs.readFileSync('./schema.prisma', 'utf-8');
  // console.log(datamodel)
  const dmmf  = await getDMMF({
    datamodel
  });
  fs.writeFileSync('./dmmf.json', JSON.stringify(dmmf, null, 2));
  // console.log(dmmf)
}

(async () => await getJSON())();