let arr = [
{
    name: "Ha",
    gender: 'female',
    poin: 8
},
{
    name: "Huy",
    gender: 'male',
    poin: 9
},
{
    name: "Hung",
    gender: 'male',
    poin: 7
},
{
    name: "Phuong",
    gender: 'female',
    poin: 6
},
{
    name: "Huyen",
    gender: 'female',
    poin: 10
},
{
    name: "Long",
    gender: 'male',
    poin: 5
},
{
    name: "Luan",
    gender: 'male',
    poin: 10
},
{
    name: "Linh",
    gender: 'female',
    poin: 8
}

];

let countMale = 0;
let countFemale = 0;
let poinMale = 0;
let poinFemale = 0;



for(let i = 0; i < arr.length; i++){
    if(arr[i].gender == 'male'){
        countMale++;
        poinMale += arr[i].poin;
    }
    if(arr[i].gender == 'female'){
        countFemale++;
        poinFemale += arr[i].poin;
    }
}

poinMale = poinMale/countMale;
poinFemale = poinFemale/countFemale;


console.log(poinMale);
console.log(poinFemale)