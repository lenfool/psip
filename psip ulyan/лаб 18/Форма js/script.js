
//Получение данных из форма и вывод их в всплывающее окно
// const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

// const {form} = document.forms;

// function getFormValue(event) {
// event.preventDefault();

//     const data = {};

//     for (let field of form) {
//    const {name} = field;

//         if (name) {
//        const {type, checked, value} = field;

//             data[name] = isCheckboxOrRadio(type) ? checked : value;
//    }
// }
// console.log(data);
// }
// form.addEventListener('submit', getFormValue);
// -------------------------------------------------------------
//По простому
const form = document.getElementById('form');

     function getFormValue(event) {
    event.preventDefault();
    // поиск полей формы по селекторам
    const name = form.querySelector('[name="name"]'),
        lastName = form.querySelector('[name="lastName"]');

        const values = {
        name: name.value,
        lastName: lastName.value
    };

         alert(values.name);
         alert(values.lastName);

        if (document.getElementById("man").checked) {
            alert("Выбран пол: Мужской")
        }
        else if (document.getElementById("woman").checked) {
            alert("Выбран пол: Женский")
        }
         

        
      
}

localStorage.setItem('name', value.name);
localStorage.setItem('lastName', value.lastName);


alert( localStorage.getItem('name') );
alert( localStorage.getItem('lastName') ); 



 form.addEventListener('submit', getFormValue);
 
