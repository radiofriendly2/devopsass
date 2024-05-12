import React from 'react'
import DisplayPicture from '../resources/zaeem.jpeg'

export default function Home(props) {
    const { name, bio } = props
    return (
        // hello
        //padoran
        <div className='container text-center'>
            <h1 className='my-3'>Home</h1>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <div className="card mb-3" style={{ maxWidth: '700px', backgroundColor: '#a8f6fd' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={DisplayPicture} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{name}</h1>
                                <p className="card-text"><i>{bio}</i></p>
                                <h3 className="card-text"><small className="text-body-secondary btn btn-info">k201752-Section A</small></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
