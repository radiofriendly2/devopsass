import React from 'react'
import CertificateItems from './CertificateItems'

export default function Certificates({ certificates }) {

    const groupedCertificates = certificates.reduce((result, certificate, index) => {
        const chunkIndex = Math.floor(index / 1);

        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }

        result[chunkIndex].push(certificate);

        return result;
    }, []);
    return (
        <div className='container text-center'>
            <h1 className='my-3'>Certificates</h1>
            <div className='container text-center'>
                {groupedCertificates.map((certificateGroup, rowIndex) => (
                    <div className='row' key={rowIndex}>
                        {certificateGroup.map((certificate) => (
                            <CertificateItems
                                key={certificate.id}
                                name={certificate.name}
                                academy={certificate.academy}
                                image={certificate.image}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
