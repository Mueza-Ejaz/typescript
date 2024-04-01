    //  Array:
let weekDays=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
     console.log(weekDays[1]);
// // Methods of Array:
// // 1: POP METHOD :

let newDays=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
     newDays.pop()
    let preDays=newDays.pop()
        console.log(preDays);

// //   2: SHIFT METHOD: 

let posDays=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
     posDays.shift()
     console.log(posDays);
 let pastDays=weekDays.shift()
       console.log(pastDays);

//    3: UNSHIFT METHOD:
let wetDays=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
      wetDays.unshift("Bilal")
      console.log(wetDays);

//  4: PUSH METHOD:
    let weakDays=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
//    weakDays.push("Bilal")
//    console.log(weakDays);
let addDays=weakDays.push()
     console.log(addDays);

//   5:SLICE METHOD:
let sliDays=["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
     let prepDays=sliDays.slice(1,4)
     console.log(prepDays);

//  6:SPLICE METHOD:
var oldDays = ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
oldDays.splice(1, 3, "Bilal", "Shameer", "Saif");
console.log(oldDays);
