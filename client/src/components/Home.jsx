import React from 'react'
import Pokemon from './Pokemon'
// import Search from './Search'
import './Home.css'

function Home() {
    return (
        <div>
                <div className="main-home">

                    {/* <div className="area-busqueda">
                        <Search />    
                    </div> */}

                    <div className="area-pokemon">
                        <Pokemon />
                    </div>
                </div>
                
        </div>
    )
}

export default Home
