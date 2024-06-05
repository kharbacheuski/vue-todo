<template>
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
            </div>
        </div>
    </section>
</template>

<script>
import { random } from '@/utils';
import NoteInput from './components/NoteInput.vue';
import NoteList from './components/NoteList.vue';

/**
 * @module App list of all user notes
 */
export default {
    name: 'App',
    components: {
        'note-input': NoteInput,
        'note-list': NoteList
    },
    data() {
        return {
            editingNoteId: null,
            notes: [],
            error: {
                message: null
            }
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
            if(!this.notes) {
                this.notes = []
            }
        },

        deleteNote(noteId) {
            this.notes = this.notes.filter(note => note.id !== noteId)
            this.setNotes()
        },
        addNote(value) {
            if(!value) {
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
            this.notes = this.notes.map(note => {
                if(note.id === this.editingNoteId) {
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