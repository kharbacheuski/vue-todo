<template>
    <div style="display: flex; gap: 10px">
        <div style="display: flex; flex-direction: column; gap: 10px">
            <InputText
                type="text"
                :placeholder="editingNoteId ? 'Enter new title' : 'Enter title'"
                v-model="value"
                :invalid="error.message ? true : false"
            />
            <small v-if="error.message" id="error">{{error.message}}</small>
        </div>
        <Button :severity="editingNoteId ? 'info' : 'primary'" :label="editingNoteId ? 'Edit' : 'Create'" @click="editingNoteId ? $emit('edit-note', value) : $emit('add-note', value)" />
        <Button v-if="editingNoteId" severity="secondary" label="Cancel" @click="$emit('cancel-edit')" />
    </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

/**
 * @module NoteTitle editing and saving note title
 */
export default {
    name: 'Input',
    components: {
        'Button': Button,
        'InputText': InputText
    },
    data() {
        return {
            value: '',
        }
    },
    props: {
        error: Object,
        editingNoteId: Number | null,
    }
}
</script>
