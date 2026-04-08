import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateEmp() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState(''); // Fixed typo in setAddress
    const [salary, setSalary] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault(); // Fixed typo here
        const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("address", address); 
    formData.append("salary", salary);


        axios.post('https://syswaycrudbackend.onrender.com/create',formData,{
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
            .then(res => {
                console.log(res);
                navigate('/'); // Navigates to the homepage after submission
            })
            .catch(err => console.log(err));
    }
    return (

        <div>
            <div className="container">
                <h1 className='text-center'> Create Form</h1>
                <Form onSubmit={handleSubmit}>
                    {/* Name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    {/* Age */}
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" min={18} placeholder="Enter Your Age" value={age} onChange={e => setAge(e.target.value)} />
                    </Form.Group>

                    {/* Address */}
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your City" value={address} onChange={e => setAddress(e.target.value)} />
                    </Form.Group>

                    {/* Salary */}
                    <Form.Group className="mb-3" controlId="formBasicSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Salary"  value={salary} onChange={e => setSalary(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default CreateEmp;
