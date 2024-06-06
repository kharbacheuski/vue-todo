<template>
    <div style="display: flex; flex-direction: column; gap: 10px">
        <note-card
            v-for="note in notes"
            :isNowEditing="note.id === editingNoteId"
            :note="note"
            :key="note.title"
            @delete-note="$emit('delete-note', note.id)"
            @set-editing-note="$emit('set-editing-note', note)"
        />
    </div>
</template>

<script>
import NoteCard from './NoteCard.vue'

/**
 * @module NoteList list of all user notes
 */
export default {
    name: 'NoteList',
    components: {
        'note-card': NoteCard
    },
    props: {
        notes: Array,
        editingNoteId: Number | null
    }
}
</script>
