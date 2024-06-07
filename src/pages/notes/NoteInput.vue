<template>
    <div style="display: flex; gap: 10px; align-items: baseline">
        <div style="display: flex; flex-direction: column; gap: 10px">
            <InputText
                style="max-width: 500px"
                autoResize
                rows="4"
                cols="80"
                type="text"
                :placeholder="input.isNoteEditing ? 'Enter new title' : 'Enter title'"
                v-model="input.value"
                :invalid="error ? true : false"
                @input="clearError()"
            />
            <InlineMessage v-if="error" severity="error" id="error">{{ error }}</InlineMessage>
        </div>
        <Button
            :severity="input.isNoteEditing ? 'info' : 'primary'"
            :label="input.isNoteEditing ? 'Edit' : 'Create'"
            @click="input.isNoteEditing ? editNote() : addNote()"
        />
        <Button
            v-if="input.isNoteEditing"
            severity="secondary"
            label="Cancel"
            @click="cancelEdit()"
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
            value: '',
            error: null
        }
    },
    props: {
        input: Object
    },
    methods: {
        addNote() {
            if (!this.input.value) {
                this.error = 'Please enter title'
                return
            }

            this.$emit('add-note', this.input.value)
        },
        editNote() {
            this.$emit('edit-note', this.input.value)
        },
        cancelEdit() {
            this.$emit('cancel-edit')
        },
        clearError() {
            this.error = null
        }
    }
}
</script>
