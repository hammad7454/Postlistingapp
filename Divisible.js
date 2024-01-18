Divisibleremove=[1,2,3,4,5,11,6,7,55];

for(let i=0; i<Divisibleremove.length; i++){
    if(Divisibleremove[i]%5==0 || Divisibleremove[i]%11==0){
        Divisibleremove.splice(i,1);
        i--;
    }
}
console.log(Divisibleremove);
