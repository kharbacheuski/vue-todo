<template>
    <Nav />
    <section class="notes">
        <div class="container">
            <div class="notes_inner">
                <h2>Here you can create new notes</h2>

                <note-input
                    @add-note="addNote"
                    :error="error"
                    :editingNoteId="editingNoteId"
                    @edit-note="editNote"
                    @cancel-edit="setEditingNoteId(null)"
                />
                <note-list
                    :notes="notes"
                    @delete-note="deleteNote"
                    @set-editing-note-id="setEditingNoteId"
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
        v-if="deletedNoteId"
        >Note {{ deletedNoteId }} deleted</Message
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
            editingNoteId: null,
            notes: [],
            error: {
                message: null
            },
            deletedNoteId: null
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
            this.deletedNoteId = noteId
            setTimeout(() => {
                this.deletedNoteId = null
            }, 5000)
        },
        addNote(value) {
            if (!value) {
                this.error.message = 'Please enter title'
                return
            }
            this.error.message = null
            this.notes.push({
                id: random(),
                title: value
            })
            this.setNotes()
        },
        setEditingNoteId(id) {
            this.editingNoteId = id
        },
        editNote(value) {
            this.notes = this.notes.map((note) => {
                if (note.id === this.editingNoteId) {
                    return {
                        ...note,
                        title: value
                    }
                }
                return note
            })

            this.setEditingNoteId(null)
            this.setNotes()
        }
    }
}
</script>
