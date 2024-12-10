import React from 'react';

const Resume = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: "#003366" }}>In case you don't or can't download it, feel free to view my resume below:</h3>
            <embed
                src="/downloads/Zully_Maya_CV.pdf"
                type="application/pdf"
                width="100%"
                height="800px"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default Resume;
