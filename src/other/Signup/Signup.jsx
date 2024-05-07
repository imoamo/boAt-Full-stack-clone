import React, { useState } from 'react'
import style from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Spinner, Stack } from '@chakra-ui/react'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [username, setuserName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // https://test-back-2-h9d7.onrender.com

    const handelSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await fetch("https://test-back-2-h9d7.onrender.com/user/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            const data = await res.json();
            console.log(data);
            alert("Signup Success");
            navigate('/login');
        } catch (error) {
            console.log(error);
            alert('Signup failed');
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            {loading ? <Stack
                direction="row"
                spacing={4}
                alignItems="center"  // Center vertically
                justifyContent="center" // Center horizontally
                h="100vh" // Set height to full viewport height
            >
                <Spinner size="xl" />
            </Stack> :
                <div >

                    <div className={style.navbar}>

                        <div>
                            <Link to='/'>Sign Up</Link>
                        </div>

                        <div>
                            <Link to='/login'>Sign in</Link>
                        </div>

                    </div>

                    <div className={style.parent}>
                        <div className={style.child}>
                            <div className={style.child_1}>
                                <img src="images/pngegg.png" alt="" />
                            </div>

                            <h3>Sign up</h3>

                            <form id="form" action="" onSubmit={handelSubmit}>
                                <label>UserName</label>
                                <br />
                                <input className={style.input} id="username" type="text" placeholder="username" required value={username}
                                    onChange={(e) => setuserName(e.target.value)}
                                />
                                <br />
                                <br />
                                <br />
                                <label>EMAIL</label>
                                <br />
                                <input className={style.input} id="email" type="email" placeholder="Email" required value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br />
                                <br />
                                <br />
                                <label>PASSWORD</label>
                                <br />
                                <input className={style.input} id="password" type="text" placeholder="Password" required value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                                <br />
                                <button type="submit" className={style.btn_1}>Sign up</button>
                            </form>
                            <div className={style.anchor}> <Link to='/login'>Already have an account ? Sign in</Link></div>

                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default Signup