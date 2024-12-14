import './main_light.css'


function Main(){
    
    
    return(
      <>
       <div id='L-rectangle'></div>
        <nav>

            <img id='L-logo' src="/images/Logo-3.png" />

            <a href=""><img id='L-house' src="/images/House.png" /></a>
            <a href=""><img id='L-plus' src="/images/Reanking.png" /></a>
        
         <div>
            <a href=""><img id="L-exit" src="/images/Logout.png" /></a>
        </div>        
        </nav>
    
        <div id='L-search-bar'>
            <a href=""><img id='L-search' src="/images/search.png"/></a>
            <input className='L-input-search'  type="text" placeholder='Search Notes' />
            <a href="./dark_home.jsx"><img id='L-dark-mode' src="/images/Dark Mode.png"/></a>
        </div>
    
          
          <div className='L-heading'>
          <h1>Hello,Anubhav!👋🏻</h1>
          <p id='L-info'>All your notes are here,in one place!</p>
          </div>

          
          <div id='L-notes'>

            <div className='L-sticky-note-1'>
                <p>This is how a Note on <br /> Note.me looks like! <br /> very simple,clean and <br /> asthetic! 🙂</p>
                <small className='L-date'>dec,11 2024</small>
            </div>

            <div className='L-sticky-note-2'>
                <p>This is how a Note on <br /> Note.me looks like! <br /> very simple,clean and <br /> asthetic! 🙂</p>
                <small className='L-date'>dec,11 2024</small>
            </div>

            <div className='L-sticky-note-3'>
                <p>This is how a Note on <br /> Note.me looks like! <br /> very simple,clean and <br /> asthetic! 🙂</p>
                <small className='L-date'>dec,11 2024</small>
            </div>

          </div>
    
        </>
    )
}

export default Main