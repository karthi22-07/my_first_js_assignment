let decl1 = 'isSunny'

let decl2 = 'isWeekend'

let decl3 = 'hasHomework'

if(decl1 && decl2);
console.log('You can go out to play.');

if(decl1 && decl3);
console.log('You cannot go out to play');


if(decl2 && decl3);
console.log('You cannot go out to play');



if(decl1 || decl2);
console.log('You can go out to play.');

if(decl1 || decl3);
console.log('You cannot go out to play');


if(decl2 || decl3);
console.log('You cannot go out to play');


if(!(decl1));
console.log('You cannot go out to play');


if(!(decl2));
console.log('You cannot go out to play');


if(!(decl3));
console.log('You can go out to play');