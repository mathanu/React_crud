import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateEmp() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState(''); 
    const [salary, setSalary] = useState('');
    const {id} =useParams();

    const navigate = useNavigate();

    // Fetch current employee data  just view
    useEffect(() => {
        axios.get(`https://syswaycrudbackend.onrender.com/view/${id}`)
            .then(res => {
    
                setName(res.data[0].name);
                setAge(res.data[0].age);
                setAddress(res.data[0].address);
                setSalary(res.data[0].salary);
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault(); 
        axios.put(`https://syswaycrudbackend.onrender.com/update/${id}`, { name, age, address, salary })
            .then(res => {
                console.log(res);
                navigate('/'); 
            })
            .catch(err => console.log(err));
    }




    return (

        <div>
            <div className="container">
                <h1 className='text-center'> Update</h1>
                <Form onSubmit={handleSubmit}>
                    {/* Name */}
                    <Form.Group className="mb-3" controlId="formBasicName">

                        
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name"
                         value={name} 
                        onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    {/* Age */}
                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" min={18} placeholder="Enter Your Age"
                         value={age}
                          onChange={e => setAge(e.target.value)} />
                    </Form.Group>

                    {/* Address */}
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your City" 
                        value={address} 
                        onChange={e => setAddress(e.target.value)} />
                    </Form.Group>

                    {/* Salary */}
                    <Form.Group className="mb-3" controlId="formBasicSalary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Salary"
                         value={salary} 
                         onChange={e => setSalary(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default UpdateEmp;
