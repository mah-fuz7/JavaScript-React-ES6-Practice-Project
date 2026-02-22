# Q1: let VS const

let:
1.can be reassigned
{
    let a=5
    a=6
}
2.Block scrope
3.cannot Redeclered
{
    let b=5
    let b=6
}

const:
1.canot reassigned and must be intialize when declered
2.Block scrope

# IntV_Ques: 👉 "Can we change object or array declared with const?"

const user={name:'Alison'}
user.name='Margeret'
console.log(user) => { name: 'Margeret' }

# Qust:2 Primitive vs Reference Types
*primitive type
=>They store actual value in memory
(string,null,bulian,number)

let a=5;
let b=a;
 b=7
 console.log(a)
 console.log(b)

*Reference Type/non Premitive
=> They store address in memory
(object,array)

let arr1=[1,2,3]
 let arr2=arr1;
 arr2.push(4)
 console.log(arr1)
 console.log(arr2)

 # intViewQues: How to copy array without changing original?
 let arr1=[1,2,3]
 let arr2=[...arr1];
 arr2.push(4)
 console.log(arr1)
 console.log(arr2)

# Question3:arethmatic oparation and compasion oparation
=> arethmatic oparaion(+,-,*,/,%,**,++,--)
=> compasion oparation(==,==,!=,!==,<,>,<=,>=)
