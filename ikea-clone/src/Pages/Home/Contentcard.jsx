import React from 'react'

function Contentcard({ image, title, text, color, textColor }) {
    let obj = {
        width: '85%',
        textAlign: 'center',
        padding: '10px 10px',
        margin: '0 auto'
    }
    return (
        <div style={{ transition: '1s', backgroundColor: `${color}`, width: '380px', marginRight: '20px', marginBottom: '20px', transition: '1s', boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', borderRadius: '6px' }} className='pb-5' id='TEMP'>
            <img src={image} alt="" width={'380px'} style={{ height: '400px', borderRadius: '6px 6px 0 0' }} />
            <div style={obj} >
                <h3 style={textColor ? { color: textColor } : { color: 'black' }} className='pb-2' >{title}</h3>
                <p style={textColor ? { color: textColor } : { color: 'black' }} className='pb-5'>{text}</p>
            </div>
        </div >
    )
}

export default Contentcard