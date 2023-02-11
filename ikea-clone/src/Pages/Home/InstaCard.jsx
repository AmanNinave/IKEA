import React from 'react'

function InstaCard({ url }) {
    // console.log(url)
    return (
        <div style={{ padding: '10px 3px' }}>
            <img src={url} alt="" width='100%' />
        </div>
    )
}

export default InstaCard