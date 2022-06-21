
function openEdit(){
    const editModal = document.querySelector('.editModal')
    const button = document.querySelector('.edit')
    const span = document.querySelector('.closeEdit')
    editModal.style.display = "block"

    span.onclick = function() {
        editModal.style.display = "none";
      }

    window.onclick = function(e){
        if (e.target == modal) {
            editModal.style.display = "none";
          }
    }
}

export default openEdit