import React from 'react'
import { BiRupee } from "@react-icons/all-files/bi/BiRupee";

function ProductCard({ image, name, price }) {
    return (
        <div style={{ transition: '1s', width: '270px', boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', borderRadius: '10px' }} id='TEMP'>
            <img src={image} alt={name} width='100%' height='220px' style={{ borderRadius: ' 10px 10px 0px 0px' }} />
            <div style={{ padding: '40px 18px' }}>
                <div className='d-flex justify-content-between'>
                    <p style={{ color: 'white', backgroundColor: 'red', padding: '6px 10px', borderRadius: '20px', fontSize: '12px' }}> New</p>
                    <h5> <BiRupee style={{ fontSize: '20px ', marginRight: '-10%' }} /> {price}</h5>

                </div>

                <p><b>{name}</b></p>

            </div>

        </div>
    )
}

export default ProductCard