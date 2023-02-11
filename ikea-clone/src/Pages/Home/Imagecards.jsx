import React from 'react'

function Imagecards({ image, name, title }) {
    // console.log(name);
    return (
        <div width='600px' style={{ transition: '1s', height: '270px', marginRight: '20px', borderRadius: '10px', background: 'white', boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }} id='TEMP'>
            <img src={image ? image : 'https://media.istockphoto.com/id/1428272134/photo/christmas-green-backdrop-grunge-wood-board-painted-background.jpg?b=1&s=170667a&w=0&k=20&c=U3FU_9Qc1HJEFklGa7aCGLiRvkR__qSatlaUnp-1was='} alt="" width='250px' height='250px' style={{ borderRadius: '6px', objectFit: 'cover' }} />

            <button style={name != undefined ? { top: '-100px', position: 'relative', padding: '10px', fontSize: '13px', width: '236px', marginLeft: '7px', borderRadius: '22px', border: 'none', textAlign: 'center' } : { display: 'none' }}>{name}</button>
            {title ? <h3 style={{ position: 'relative', top: '-220px', color: 'white', fontSize: '20px', padding: '10px' }}> Explore our guides to sustainable living</h3> : <></>}
        </div>
    )
}

export default Imagecards

// backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',