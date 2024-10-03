import React, { useState, useRef } from 'react';
import axios from 'axios';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="loader"></div>
    <style>{`
      .loader {
        border: 16px solid #f3f3f3; /* Light gray */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const JoinUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  
  // Use useRef to reset file input
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader on submit

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('jobTitle', jobTitle);
    formData.append('experience', experience);
    formData.append('message', message);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post('http://localhost:5000/api/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Message sent successfully!');
      setError('');

      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setExperience('');
      setJobTitle('');
      setMessage('');
      setFile(null);

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error sending message', error);
      setError('Failed to send the message.');
      setSuccess('');
    } finally {
      setLoading(false); // Hide loader after submission
    }
  };

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading */}

      {/* Banner Section */}
      <div className='bg-bgblue h-[40vh] max-w-screen mx-auto sm:mt-16 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1670250721717-889b17349fc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVldGh8ZW58MHx8MHx8fDA%3D")] bg-no-repeat bg-cover bg-center'>
        <div className="flex flex-col leading-tight tracking-tight text-center text-white">
          <h1 className="sm:text-[3vw] text-[5vh] font-bold overflow-hidden pt-10">Join Us</h1>
          <p className="sm:w-2/3 p-4 text-[2vh] sm:text-[1.2vw] mx-auto text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            officiis vitae dignissimos repudiandae quod necessitatibus quae.
            Quae animi nulla rerum iste doloribus!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto bg-slate-50">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-bgblue">Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" value={name} id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job Title</label>
                <select id="jobTitle" value={jobTitle} name="jobTitle" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setJobTitle(e.target.value)} required>
                  <option value="">Select a title</option>
                  <option value="qualityCheck">Quality Check</option>
                  <option value="designer">Designer</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience</label>
                <select id="experience" value={experience} name="experience" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setExperience(e.target.value)} required>
                  <option value="">Select experience</option>
                  <option value="lessThan1Year">Less than 1 year</option>
                  <option value="1-2Years">1-2 Years</option>
                  <option value="2-4Years">2-4 Years</option>
                  <option value="5PlusYears">5+ Years</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Attach Resume:</label>
                <input type="file" accept=".pdf" onChange={handleFileChange} ref={fileInputRef} required />
              </div>

              <div className="text-center pt-10">
                <button type="submit" className={`bg-bgblue text-textwhite border px-4 py-2 rounded-md
                hover:bg-white hover:text-bgblue hover:border duration-150 border-bgblue z-50`}>
                  Submit
                </button>
              </div>
            </form>

            {/* Display success or error messages */}
            {success && <p className="text-green-500">{success}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <img src="/images/dentist.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
