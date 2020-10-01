let addBtn = document.getElementById('addBtn');
showNotes();
addBtn.addEventListener('click', function (e) {
    let textValue = document.getElementById('addText')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes)
    }
    noteObj.push(textValue.value);
    localStorage.setItem('notes', JSON.stringify(noteObj))
    textValue.value = '';
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes)
    }
    let html = '';
    noteObj.forEach(function (elements, index) {
        html += `
          <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p> ${elements}</p>
                <button  id="${index}" onclick="deleteNode(this.id)" class="btn btn-danger btn-sm">delete Note</button>
            </div>
        </div>
        `
    })
    let notesElm = document.getElementById('notes')
    notesElm.innerHTML = html;

}

function deleteNode(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes)
    }
    noteObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(noteObj))
    showNotes();
}

let search = document.getElementById('searchNotes')
search.addEventListener('input', function () {
    let searchText =  search.value;
    let allCards = document.getElementsByClassName('noteCard')
  Array.from(allCards).forEach(function (element) {
       let cardText = element.getElementsByTagName('p')[0].innerHTML
    if (cardText.includes(searchText)){
        element.style.display = 'block'
    }else {

        element.style.display = 'none';

    }
  })

})
