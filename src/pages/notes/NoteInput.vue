<template>
    <div style="display: flex; gap: 10px; align-items: baseline">
        <div style="display: flex; flex-direction: column; gap: 10px">
            <InputText
                style="max-width: 500px"
                autoResize
                rows="4"
                cols="80"
                type="text"
                :placeholder="editingNoteId ? 'Enter new title' : 'Enter title'"
                v-model="value"
                :invalid="error.message ? true : false"
            />
            <InlineMessage v-if="error.message" severity="error" id="error">{{
                error.message
            }}</InlineMessage>
        </div>
        <Button
            :severity="editingNoteId ? 'info' : 'primary'"
            :label="editingNoteId ? 'Edit' : 'Create'"
            @click="editingNoteId ? $emit('edit-note', value) : $emit('add-note', value)"
        />
        <Button
            v-if="editingNoteId"
            severity="secondary"
            label="Cancel"
            @click="$emit('cancel-edit')"
        />
    </div>
</template>

<script>
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import InlineMessage from 'primevue/inlinemessage'

/**
 * @module NoteInput editing and saving note title
 */
export default {
    name: 'Input',
    components: {
        Button: Button,
        InputText: Textarea,
        InlineMessage: InlineMessage
    },
    data() {
        return {
            value: ''
        }
    },
    props: {
        error: Object,
        editingNoteId: Number | null
    }
}
</script>
