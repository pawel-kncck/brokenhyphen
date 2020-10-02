const testOutput = document.getElementById('test-output')
const editor = document.getElementById('editor')
let editorValue = document.getElementById('editor').innerText

const getElementValue = (domPath, elementId) => {
    let result = null;
    domPath.forEach(element => {
        if (element.id === elementId) result = element.innerText
    });
    return result;
}


const init = () => {
    console.log("App initialized")
    
    editor.addEventListener('DOMSubtreeModified', (event) => {console.log(getElementValue(event.path,'editor'))})

}

init();