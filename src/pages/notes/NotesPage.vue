<template>
    <Nav />
    <section class="notes">
        <div class="container">
            <div class="notes_inner">
                <h2>Here you can create new notes</h2>

                <note-input
                    :input="input"
                    @edit-note="editNote"
                    @cancel-edit="setEditingNote(null)"
                    @add-note="addNote"
                />
                <note-list
                    :editingNoteId="input.editingNoteId"
                    :notes="notes"
                    @delete-note="deleteNote"
                    @set-editing-note="setEditingNote"
                />

                <div class="spoiler">
                    <p>
                        All your notes are stored in <b>local storage</b> and will
                        <b>not be accessible on other devices</b> or when data is cleared from local
                        storage.
                    </p>
                    <p><b>Keep that in mind, good luck!</b></p>
                </div>
            </div>
        </div>
    </section>
    <Message
        severity="error"
        style="position: fixed; bottom: 50px; left: 50px; width: 300px"
        v-if="isDeleteMessageVisible"
        >Note deleted</Message
    >
</template>

<script>
import { random } from '@/utils'
import NoteInput from './NoteInput.vue'
import NoteList from './NoteList.vue'
import './style.scss'
import PageNavigation from '@/components/layout/PageNavigation.vue'
import Message from 'primevue/message'

/**
 * @module NotesPage list of all user notes
 */
export default {
    name: 'NotesPage',
    components: {
        'note-input': NoteInput,
        'note-list': NoteList,
        Nav: PageNavigation,
        Message: Message
    },
    data() {
        return {
            input: {
                isNoteEditing: false,
                editingNoteId: null,
                value: ''
            },
            isDeleteMessageVisible: false,
            
            notes: [],
        }
    },
    beforeMount() {
        this.getNotes()
    },
    methods: {
        setNotes() {
            localStorage.setItem('notes', JSON.stringify(this.notes))
        },
        getNotes() {
            this.notes = JSON.parse(localStorage.getItem('notes'))
            if (!this.notes) {
                this.notes = []
            }
        },
        deleteNote(noteId) {
            this.notes = this.notes.filter((note) => note.id !== noteId)
            this.setNotes()
            this.isDeleteMessageVisible = true

            setTimeout(() => {
                this.isDeleteMessageVisible = false
            }, 5000)
        },
        addNote(value) {
            this.notes.unshift({
                id: random(),
                title: value
            })
            this.setNotes()
            this.input.value = ''
        },
        setEditingNote(editingNote) {
            this.input.isNoteEditing = !!editingNote
            this.input.value = editingNote?.title || ''
            this.input.editingNoteId = editingNote?.id || null
        },
        editNote(value) {
            this.notes = this.notes.map((note) => {
                if (note.id === this.input.editingNoteId) {
                    return {
                        ...note,
                        title: value
                    }
                }
                return note
            })
            this.setNotes()

            this.input.isNoteEditing = false
            this.input.editingNoteId = null
            this.input.value = ''
        }
    }
}
</script>
