import React from 'react'

export default function CourseItems(props) {

    const { name, courseCode } = props
    return (
        <div className="card mx-2 my-2 col" style={{ width: '25rem',height:'10rem', backgroundColor: '#a8f6fd' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text btn btn-info position-absolute bottom-0 end-0"><i>{courseCode}</i></p>
            </div>
        </div>
    )
}
