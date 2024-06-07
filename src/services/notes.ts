import { random } from '@/utils'

type NoteType = {
    id: string
    title: string
}

class NotesService {
    getNotes(): NoteType[] {
        return JSON.parse(localStorage.getItem('notes') || '[]')
    }
    setNotes(notes: NoteType[]) {
        localStorage.setItem('notes', JSON.stringify(notes))

        return notes
    }
    deleteNote(noteId: string, notes: NoteType[]): NoteType[] {
        notes = notes.filter((note) => note.id !== noteId)
        return this.setNotes(notes)
    }
    addNote(value: string, notes: NoteType[]): NoteType[] {
        notes.unshift({
            id: random(),
            title: value
        })

        return this.setNotes(notes)
    }
    editNote(noteId: string, value: string, notes: NoteType[]): NoteType[] {
        notes = notes.map((note) => {
            if (note.id === noteId) {
                return {
                    ...note,
                    title: value
                }
            }
            return note
        })

        return this.setNotes(notes)
    }
}

export default NotesService
