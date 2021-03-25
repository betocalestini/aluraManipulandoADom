const ButtonDone = () => {
    const buttonDone = document.createElement('button')
    buttonDone.classList.add('check-button')
    buttonDone.innerText = 'Concluir'
    buttonDone.addEventListener('click', completeTask)
    return buttonDone
}

const completeTask = (event) => {
    const buttonDone = event.target

    const taskCompleted = buttonDone.parentElement
    taskCompleted.classList.toggle('done')
}

export default ButtonDone