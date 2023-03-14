const form = document.getElementById('form');

     function getFormValue(event) {
    event.preventDefault();
    // поиск полей формы по селекторам
    const name = form.querySelector('[name="name"]'),
        lastName = form.querySelector('[name="lastName"]')
        sex = form.querySelector('[name="sex"]');

         const values = {
        name: name.value,
        lastName: lastName.value,
        sex: sex.value
        };

         alert(values.name);
         alert(values.lastName);
         

        if (document.getElementById("man").checked) {
            alert("Выбран пол: Мужской")
            localStorage.sex = "man";
            
        }
        else if (document.getElementById("woman").checked) {
            alert("Выбран пол: Женский")
            localStorage.sex = "woman";
        }
        localStorage.setItem('name', name.value);
        localStorage.setItem('lastName', lastName.value);
        
        var json =JSON.stringify(values);
        console.log(json);
}





 form.addEventListener('submit', getFormValue);
 