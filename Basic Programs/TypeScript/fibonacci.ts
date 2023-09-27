const n:number = 10;
let firstnum:number = 0;
let secondnum:number = 1;
for (let index = 0; index <= n; index++) {
   console.log(firstnum + " ");
   const next:number = firstnum + secondnum;
   firstnum = secondnum;
   secondnum =next;
    
} 
export{}