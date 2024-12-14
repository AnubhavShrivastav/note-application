import './darkHome.css' 

function DarkHome(){
    
    
    return(
      <>
     <div id='D-rectangle'></div>
      <nav>
            <img id='logo' src="/images/darkLogo.png" />
        

            <a href=""><img id='house' src="/images/dark_House.png" /></a>
            <a href=""><img id='plus' src="/images/dark_Reanking.png" /></a>
        
         <div>
            <a href=""><img id="exit" src="/images/dark_Logout.png" /></a>
        </div>        
        </nav>
    
        <div id='search-bar'>
            <a href=""><img id='search' src="/images/search.png"/></a>
            <input className='input-search'  type="text" placeholder='Search Notes' />
            <a href=""><img id='dark-mode' src="/images/dark_sun.png"/></a>
        </div>
    
          
          <div className='heading'>
          <h1>Hello,Anubhav!👋🏻</h1>
          <p id='info'>All your notes are here,in one place!</p>
          </div>

          
          <div id='notes'>

            <div className='sticky-note-1'>
                <p>This is how a Note on <br /> Note.me looks like! <br /> very simple,clean and <br /> asthetic! 🙂</p>
                <small className='date'>dec,11 2024</small>
            </div>

            <div className='sticky-note-2'>
                <p>This is how a Note on <br /> Note.me looks like! <br /> very simple,clean and <br /> asthetic! 🙂</p>
                <small className='date'>dec,11 2024</small>
            </div>

            <div className='sticky-note-3'>
                <p>This is how a Note on <br /> Note.me looks like! <br /> very simple,clean and <br /> asthetic! 🙂</p>
                <small className='date'>dec,11 2024</small>
            </div>

          </div>
    
        </>
    )
}

export default DarkHome