    const ButtonDelete = () => {
        const buttonDelete = document.createElement('button')

        buttonDelete.innerText = 'Deletar'
        buttonDelete.addEventListener('click', deleteTask)
        return buttonDelete
    }

    const deleteTask = (event) => {
        const buttonDelete = event.target
        const taskCompleted = buttonDelete.parentElement

        taskCompleted.remove()
        return buttonDelete

    }

    export default ButtonDelete