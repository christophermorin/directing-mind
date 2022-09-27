const addJournal = document.querySelector('.add-journal')
const openJournalDialog = document.getElementById('add_journal')

addJournal.addEventListener('click', () => {
    openJournalDialog.showModal()
})