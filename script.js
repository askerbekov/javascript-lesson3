// function checkUser(user)   {
//     if (user === 'Mederbek') {
//         return `Welcome ${user}`
//     } else {
//         return "false not correct user"
//     }
// }
//
// console.log(checkUser( 'fsd'))

// function februarDay (day) {
//     if (day <= 28){
//         return `today is ${day} of february`
//     } else {
//         return `on february only 28 day, your day is ${day} of another month`
//     }
// }
// console.log(februarDay(28))

// function fixedNumber (num) {
//     if (num === 50) {
//         return true
//     } else {
//         return `${num} is not correct`
//     }
//
// }
// console.log(fixedNumber(50))

// function userData (name, age){
//     if (name === 'Mederbek' , age === 20){
//         return `${name} ${age} Welcome`
//     } else  {
//         return `${name} ${age} rejected`
//     }
// }
// console.log(userData('Mederbek', 20))

  // function userName (name) {
  //   if (name.length <= 3){
  //       return `${name} name is too short (min 3)`
  //   }else {
  //       return `${name}  name is accepted`
  //   }
  // }
  // console.log(userName('fg'))

// function userName (name) {
//   if (name.length >= 5 ){
//       return `${name} name is too long (max 5)`
//   } else if (name.length <= 3){
//       return `${name}  name is too short (min 3)`
//   } else  {
//       return  `${name}  name is accepted`
//   }
// }
// console.log(userName('jh'))

    // function ageNumber (age) {
    //     if (typeof  age === 'string' ){
    //         return 'string'
    //     }else {
    //         return 'number'
    //     }
    // }
    // console.log(ageNumber(55))

// function ageNumber (age) {
//     if (typeof  age === 'string'){
//         if (age > 23){
//             return 'this number is less than 23'
//         }else {
//             return 'accepted'
//         }
//     } else {
//         return `age must be string ${age}`
//     }
// }
// console.log(ageNumber(28))

function weekInfo (day){
    if (day <= 7 && day > 0 ){
        if (day === 6|| day === 7){
            return `today is Weekend`

        }else if (day === 5){
            return `today is friday`
        }else if (day === 4){
            return `today is thursday`
        }else if (day === 3){
            return `today is wednesday`
        }else if (day === 2){
            return `today is tuesday`
        }else if (day === 1){
            return `today is monday`
        }

    }else {
        return "error"
    }
}
console.log(weekInfo(-7))