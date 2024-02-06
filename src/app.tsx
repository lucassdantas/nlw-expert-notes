import logo from './assets/logo-nwl-expert.svg'

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
                
                <div className='rounded-md bg-slate-700 p-5 space-y-3'>
                    <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
                   
                    <p className='text-sm leading-6 text-slate-400'>
                        Grave uma nota em áudio que será convertida para texto automaticamente.
                    </p>
                </div>
          
                <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
                    <span className='text-sm font-medium text-slate-300'>Há 2 dias</span>
                   
                    <p className='text-sm leading-6 text-slate-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas enim pariatur ratione voluptatem animi asperiores sint culpa voluptates optio qui ullam, architecto ipsam nam voluptatum rem accusamus odit placeat obcaecati!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas enim pariatur ratione voluptatem animi asperiores sint culpa voluptates optio qui ullam, architecto ipsam nam voluptatum rem accusamus odit placeat obcaecati!
                    </p>

                    <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0'/>
                </div>
          
                <div className='rounded-md bg-slate-800 p-5 space-y-3'>
                    <span className='text-sm font-medium text-slate-300'>Há 4 dias</span>
                   
                    <p className='text-sm leading-6 text-slate-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas enim pariatur ratione voluptatem animi asperiores sint culpa voluptates optio qui ullam, architecto ipsam nam voluptatum rem accusamus odit placeat obcaecati!
                    </p>
                </div>
                
                

            </div>
        </div>
    )
    
}

