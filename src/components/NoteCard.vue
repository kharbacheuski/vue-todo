<template>
    <Card style="width: 550px" >
        <template #title>{{ note.title }}</template>
        <template #content>
            <p v-if="note?.description" class="m-0">
                {{note?.description}}
            </p>
        </template>
        <template #footer>
            <div style="display: flex; gap: 10px">
                <Button
                    @click="$emit('delete-note', note.id)"
                    label="Delete"
                    severity="danger"
                />
                <Button
                    severity="contrast"
                    label="Edit"
                    @click="$emit('set-editing-note-id', note.id)"
                />
            </div>
        </template>
    </Card>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
import AccordionTab from 'primevue/accordiontab';
/**
 * @module NoteCard single user note
 */
export default {
    name: 'NoteCard',
    props: {
        note: Object,
        editingNoteId: Number | null
    },
    components: {
        'Button': Button,
        'Card': Card,
        'AccordionTab': AccordionTab
    }
}
</script>
