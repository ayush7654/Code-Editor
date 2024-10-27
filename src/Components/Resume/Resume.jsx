import React from 'react';
import Modal from 'react-modal';
import './Resume.css'

const Resume = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Resume Modal"
            ariaHideApp={false} // Set to false for accessibility
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Change this to your desired color and opacity
            },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    maxWidth: '600px',
                    minWidth: '300px',
                    maxHeight: '90vh', // Limit height to 80% of viewport height
                    overflowY: 'auto',
                    backgroundColor: 'rgb(72,72,72,0.4)' // Enable vertical scrolling if content exceeds maxHeight
                },
            }}
        >
            <div style={{ width: '100%', height: '70vh' }}>
            <iframe
                src="/Ayush-Resume.pdf"
                width="100%"
                height="100%" // Fixed height for iframe
                title="Resume"
            />
            </div>
          <div className='btn-container'>
          <a href="/Ayush-Resume.pdf" download className="download-btn">
                Download Resume
            </a>
            <button className='close-btn' onClick={onRequestClose}>Close</button>
          </div>
           
        </Modal>
    );
};

export default Resume;