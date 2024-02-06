
export function NoteCard() {
 return(
    <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative '>
        <span className='text-sm font-medium text-slate-300'>Há 4 dias</span>
        
        <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas enim pariatur ratione voluptatem animi asperiores sint culpa voluptates optio qui ullam, architecto ipsam nam voluptatum rem accusamus odit placeat obcaecati!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas enim pariatur ratione voluptatem animi asperiores sint culpa voluptates optio qui ullam, architecto ipsam nam voluptatum rem accusamus odit placeat obcaecati!
        </p>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
    </div>
 )   
}