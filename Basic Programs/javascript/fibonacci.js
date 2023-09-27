const n = 10;
let firstnum = 0;
let secondnum = 1;
for (let index = 0; index <= n; index++) {
   console.log(firstnum + " ");
   const next = firstnum + secondnum;
   firstnum = secondnum;
   secondnum =next;
    
} 