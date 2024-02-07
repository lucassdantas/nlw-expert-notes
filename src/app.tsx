import logo from './assets/logo-nwl-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

const note = {
    date: new Date(),
    content: 'teste'
}
export function App() {
    return(
        <div className='mx-auto max-w-6xl my-12 space-y-6'>
            <img className='' src={logo}/>
            <form className='w-full'>
                <input 
                    type='text'
                    placeholder='busque em suas notas'
                    alt='NLW Expert'
                    className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none'    
                />    
            </form>
            <div className='h-px bg-slate-700'/>

            <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
                
                <NewNoteCard/>
                <NoteCard note={note}/>
                <NoteCard note={note}/>
            </div>
        </div>
    )
    
}

