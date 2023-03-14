class Person{
        name;
        age;
         
        print(){
            console.log(`Name: ${this.name}  Age: ${this.age}`);
        }
    }
    class Employee extends Person{
        company;
        work(){
            console.log(`${this.name} works in ${this.company}`);
        }
    }
      
    const tom = new Person();
    tom.name = "Tom"; 
    tom.age= 34;
    const bob = new Employee();