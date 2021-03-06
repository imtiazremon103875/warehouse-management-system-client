import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const ConfirmPassword = confirmPasswordRef.current.value
        if (password != ConfirmPassword) {
            alert("please give same password & confirm password")
        }
        else {
            createUserWithEmailAndPassword(email, password)
            // navigate('/home')
            toast("verification email sent")
        }


    }

    return (
        <div style={{ width: "30vw", height: "55vw" }} className=' mx-auto border border-dark mt-3 px-3 py-2 rounded'>
            <h2 className='text-center'>Please sign up</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-5" controlId="formBasicEmail">

                    <Form.Control ref={nameRef} type="name" placeholder="Enter your name" required />

                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicConfirmPassword">

                    <Form.Control ref={confirmPasswordRef} type="password" placeholder=" confirm Password" required />
                </Form.Group>

                {errorElement}

                <Button className='w-100' variant="dark" type="submit">
                    register
                </Button>
                <p className='my-3'>Already have a account <Link className='text-decoration-none' to="/login"> please login</Link> </p>
            </Form>

            <SocialLogin></SocialLogin>


        </div>
    );
};

export default Register;