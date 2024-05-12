import React from 'react'

export default function CertificateItems(props) {

    const { name, academy, image } = props
    return (
        <div className="card mx-2 my-2 col" style={{ width: '25rem', backgroundColor: '#a8f6fd' }}>
            <img src={image} className="card-img-top position-absolute top-50 start-100 translate-middle" alt={name} style={{ width: '75px'}}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text"><i>{academy}</i></p>

            </div>
        </div>
    )
}
