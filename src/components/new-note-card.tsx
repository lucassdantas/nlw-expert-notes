import * as Dialog  from '@radix-ui/react-dialog'
import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {X} from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {toast} from 'sonner'

interface NewNoteCardProps {
    onNoteCreated: (content:string) => void
}

export function NewNoteCard({onNoteCreated}: NewNoteCardProps) {
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
    const [content, setContent] = useState('')

    const handleStartEditor = () => setShouldShowOnBoarding(false)
    const handleContentChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
        if(e.target.value === '') setShouldShowOnBoarding(true);
    }
    const handleSaveNote = (form:FormEvent) => {
        form.preventDefault
        onNoteCreated(content)
        
        toast.success('Nota criada com sucesso!')
        setContent('')
        setShouldShowOnBoarding(true)
    }

    return(
        <Dialog.Root>
            <Dialog.Trigger className='rounded-md flex flex-col bg-slate-700 text-left p-5 space-y-3 outline-none  hover:ring-2 focus-visible:ring-2 focus-visible:ring-lime-400'>
                <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
            
                <p className='text-sm leading-6 text-slate-400'>
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </p>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='inset-0 fixed bg-black/50'></Dialog.Overlay>
            <Dialog.Content className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 max-w-[640px] h-[60vh] w-full rounded-md flex flex-col outline-none'>
                <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'> <X className='size-5'/> </Dialog.Close>
                <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>
                    <div className='flex flex-1 flex-col gap-3 p-5 '>
                        <span className='text-sm font-medium text-slate-300'>Adicionar nota</span>
                        {shouldShowOnBoarding ? (
                            <p className='text-sm leading-6 text-slate-400'>
                                Comece <button className='font-medium text-lime-400 hover:underline '>gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline '>use apenas texto.</button>
                            </p>
                            ):(
                            <textarea
                                autoFocus 
                                className='text-sm landing-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                                onChange={handleContentChange}
                                value={content}
                            />
                            )
                        }
                    </div>
                    <button type='button' onClick={handleSaveNote} className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500'>
                    Salvar nota
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>
        
    )
}