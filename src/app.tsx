import logo from './assets/logo-nwl-expert.svg'

export function App() {
    return(
        <div className='mx-auto max-w-6xl my-12'>
            <img className='' src={logo}/>
            <form className='w-full'>
                <input type='text' placeholder='busque em suas notas' alt='NLW Expert'/>    
            </form>
        </div>
    )
    
}

