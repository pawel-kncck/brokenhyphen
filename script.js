const testOutput = document.getElementById('test-output')
const editor = document.getElementById('editor')
editor.innerHTML = '<span>123456789</span><span>123456789</span><span>123456789</span>'
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

    const indexSpans = () => {
        const spanNodes = document.getElementsByTagName("span")
        const spanArray = Array.prototype.slice.call(spanNodes)
        let i = 0;
        spanArray.forEach(element => {
            const len = element.innerText.length

            element.setAttribute("startIndex", i + 1);
            element.setAttribute("endIndex", i + len);
            i = i + len;
        });
    }

    indexSpans();

    const printSelection = () => {
        const anchorStartIndex = window.getSelection().anchorNode.parentElement.attributes.startindex.value;
        const anchorEndIndex = window.getSelection().anchorNode.parentElement.attributes.endindex.value;
        const extentStartIndex = window.getSelection().extentNode.parentElement.attributes.startindex.value;
        const extentEndIndex = window.getSelection().extentNode.parentElement.attributes.endindex.value;

        const selectionStartIndex = window.getSelection().anchorOffset + parseInt(anchorStartIndex)
        const selectionEndIndex = window.getSelection().extentOffset + parseInt(extentStartIndex)

        if (selectionStartIndex !== selectionEndIndex) {

            console.log(selectionStartIndex);
            console.log(selectionEndIndex);

            console.log(window.getSelection())

        }
    }
    
    editor.addEventListener('DOMSubtreeModified', indexSpans)

    editor.addEventListener('mouseup', () => printSelection())
    editor.addEventListener('keyup', () => printSelection())

}

init();