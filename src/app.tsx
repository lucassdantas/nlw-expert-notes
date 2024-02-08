import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nwl-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
    id:string,
    date: Date,
    content: string
}
export function App() {
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState<Note[]>(() => {
            const notesOnStorage = localStorage.getItem('notes')
            if(notesOnStorage) return JSON.parse(notesOnStorage)
            return[]
        })

    const onNoteCreated = (content:string) => {
        const newNote = {
            id:crypto.randomUUID(), 
            date: new Date(), 
            content
        }
    
        const notesArray = [newNote, ...notes]
        setNotes(notesArray)
        localStorage.setItem('notes', JSON.stringify(notesArray))
    
    }

    const onNoteDeleted = (id:string) => {
        const notesArray = notes.filter(note => note.id != id)
        setNotes(notesArray)
        localStorage.setItem('notes', JSON.stringify(notesArray))
    }

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearch(query)
    }


    const filteredNotes = search != ''
        ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
        : notes

    return(
        <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
            <img className='' src={logo}/>
            <form className='w-full'>
                <input 
                    type='text'
                    placeholder='busque em suas notas'
                    alt='NLW Expert'
                    onChange={handleSearch}
                    value={search}
                    className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none'    
                />    
            </form>
            <div className='h-px bg-slate-700'/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>
                <NewNoteCard onNoteCreated={onNoteCreated}/>
                {
                    filteredNotes.map(note => {
                        return <NoteCard note={note} key={note.id} onNoteDeleted={onNoteDeleted}/>
                    })
                }
            </div>
        </div>
    )
    
}

