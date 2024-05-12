import React from 'react'

export default function ProjectItems(props) {

    const { name, description, techStack } = props
    return (
        <div className="card mx-2 my-2 col" style={{ width: '25rem', backgroundColor: '#a8f6fd' }}>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text"><i>{description}</i></p>
                {
                    techStack.map((elem) => {
                        return (
                            <p className='btn btn-info mx-3'><i>{elem}</i></p>
                        )
                    })
                }
            </div>
        </div>
    )
}
