class Cat{
    constructor(name,sex){
        this.name=name,
        this.sex=sex,
        this.speak =()=>{
           return `${this.name} says meow!`
        }
    }
}
class Dog{
    constructor(name,sex){
        this.name=name,
        this.sex=sex,
        this.speak =()=>{
           return `${this.name} says woof!`
        }
    }
}
class Bird{
    constructor(name,sex){
        this.name=name,
        this.sex=sex,
        this.speak =()=>{
            if (this.sex==="male"){
                return `It\'s me! ${this.name}, the parrot!`
            } if (this.sex==="female"){
                `${this.name} says squawk!`
            }
           return `${this.name} says squawk!`
        }
    }
}