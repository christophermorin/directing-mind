const addJournal = document.querySelector('.add-journal')
const openJournalDialog = document.getElementById('add_journal')

addJournal.addEventListener('click', () => {
    openJournalDialog.showModal()
})

const closeJournalAdd = document.querySelector('.close-add-journal')
closeJournalAdd.addEventListener('click', () => {
    openJournalDialog.close()
})