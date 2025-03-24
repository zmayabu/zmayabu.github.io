import React from 'react';

const Resume = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: "#003366" }}>You can view and download my resume below:</h3>
            <embed
                src={process.env.PUBLIC_URL + "/zmaya_resume.pdf"}
                type="application/pdf"
                width="100%"
                height="800px"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default Resume;
