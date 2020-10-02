const testOutput = document.getElementById('test-output')
const editor = document.getElementById('editor')
editor.innerHTML = '<span>test</span>'
let editorValue = document.getElementById('editor').innerText

const getElementValue = (domPath, elementId) => {
    let result = null;
    domPath.forEach(element => {
        if (element.id === elementId) result = element.innerHTML
    });
    return result;
}


const init = () => {
    console.log("App initialized")

    const printSelection = () => {
        if (window.getSelection().anchorOffset !== window.getSelection().extentOffset) {
            console.log(window.getSelection())
        }
    }
    
    // editor.addEventListener('DOMSubtreeModified', (event) => {console.log(window.getSelection())})
    editor.addEventListener('mouseup', () => printSelection())
    editor.addEventListener('keyup', () => printSelection())

}

init();