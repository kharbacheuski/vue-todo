<template>
    <article :class="isNowEditing ? 'card editing' : 'card'">
        <h3 class="card_title" ref="title">{{ note.title }}</h3>
        <div class="card_actions">
            <i
                class="pi pi-clipboard card-copy"
                style="font-size: 1.5rem"
                @click="copyToClipboard()"
            ></i>
            <i
                class="pi pi-pencil card-edit"
                style="font-size: 1.5rem"
                @click="setEditingNote()"
            ></i>
            <i class="pi pi-times card-delete" style="font-size: 1.5rem" @click="deleteNote()"></i>
        </div>
        <Message style="position: fixed; bottom: 50px; left: 50px" v-if="isCopied"
            >Note title copied to clipboard</Message
        >
    </article>
</template>

<script>
import Button from 'primevue/button'
import Card from 'primevue/card'
import AccordionTab from 'primevue/accordiontab'
import Message from 'primevue/message'
/**
 * @module NoteCard single user note
 */
export default {
    name: 'NoteCard',
    props: {
        note: Object,
        isNowEditing: Boolean
    },
    data() {
        return {
            isCopied: false,
            isDeleted: false
        }
    },
    components: {
        Button: Button,
        Card: Card,
        AccordionTab: AccordionTab,
        Message: Message
    },
    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText(this.note.title)
            this.isCopied = true

            setTimeout(() => {
                this.isCopied = false
            }, 5000)
        },
        deleteNote() {
            this.isDeleted = true
            setTimeout(() => {
                this.isDeleted = false
            }, 5000)
            this.$emit('delete-note', this.note.id)
        },
        setEditingNote() {
            this.$emit('set-editing-note', this.note)
        }
    }
}
</script>
