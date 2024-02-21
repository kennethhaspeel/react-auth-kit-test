import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from '../../api/axios'
import { Alert } from 'react-bootstrap'
import useSignIn from 'react-auth-kit/hooks/useSignIn'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const signIn = useSignIn()
    const from = location.state?.from?.pathname || "/";

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("kminchelle");
    const [password, setpassword] = useState("0lelplR");
    const [errMsg, setErrMsg] = useState('');
    const userRef = useRef();
    const errRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {

            const response = await axios.post('/auth/login',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response.data);
            signIn({
                auth: {
                    token: response.data.token,
                    type: "Bearer"
                },
                userState: {
                    lastName: response.data.lastName,
                    firstName: response.data.firstName,
                }
            })
            
        } catch (err) {
            console.log(err)
            if (err && err instanceof AxiosError)
            setErrMsg(err.response?.data.message);
          else if (err && err instanceof Error) setErrMsg(err.message);
            setLoading(false)
        }

    }

  return (
    <>
    <h1>Log In</h1>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    
    {
        loading ? (
            <Alert variant='info'>Even geduld... U wordt ingelogd</Alert>
        ) :
            (
                <section>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Uw emaildres</label>
                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                autoComplete="off"
                                ref={userRef}
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="paswoord" className="form-label">Uw paswoord</label>
                            <input
                                className="form-control"
                                type="password"
                                id="paswoord"
                                autoComplete="off"
                                onChange={(e) => setpassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        {/* <div className='mb-3'>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="chkOnthouMij"
                                    checked={persist}
                                    onChange={togglePersist}
                                />
                                <label className="form-check-label" htmlFor="chkOnthouMij">
                                    Onthou mij
                                </label>
                            </div>
                        </div> */}
                        <button type="submit" className="btn btn-info mt-3">Inloggen</button>
                    </form>
                    <p>Nog niet geregistreerd? Registreer <Link to='/registreer'>HIER</Link></p>
                </section>

            )
    }

</>
  )
}

export default Login