import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { useState, useEffect } from 'react'

const Loguit = () => {
    const signOut = useSignOut();
    const [loading, setLoading] = useState(true);

    const uitloggen = async () => {
        try {
            signOut()
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    useEffect(() => {
        uitloggen()
    }, [])


    return (
        <>
            <h2>Uitloggen</h2>
            {loading ? (
                <p>Even geduld... U wordt uitgelogd</p>
            ) : (
                <p>U bent uitgelogd</p>
            )}

        </>
    )
}

export default Loguit