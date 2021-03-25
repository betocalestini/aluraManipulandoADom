import  ButtonDone  from './components/completeTask.js';
import  ButtonDelete  from "./components/deleteTask.js";

    const createTask = (event) => {

        event.preventDefault()

        const list = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input');
        const taskValue = input.value;;

        const task = document.createElement('li')
        task.classList.add('task')
        const content = `<p class="content">${taskValue}</p>`

        task.innerHTML = content
        task.appendChild(ButtonDone())
        task.appendChild(ButtonDelete())
        list.appendChild(task)
        input.value = "";
    }

    const newTask = document.querySelector('[data-form-button]')

    newTask.addEventListener('click', createTask)



