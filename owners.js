'use strict';


const owners=require('./owners.json');


console.log(owners[0].firstname);
console.log(owners[1].firstname);
console.log(owners[2].firstname);
console.log(owners[3].firstname);

let key='firstname';
console.log(owners[0][key]);

key='lastname';
console.log(owners[0][key]);

for(let owner of owners) {
 console.log(owner.firstname);
}
for(let owner of owners) {
 console.log(`firstname: ${owner.firstname}, lastname:
${owner.lastname}`);
}