
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useEffect } from 'react'

const Header = () => {

    const isAuthenticated = useIsAuthenticated()
    const auth = useAuthUser()

    useEffect(()=>{
        console.log(isAuthenticated())
    },[isAuthenticated])
    return (
        <>
            {
                isAuthenticated() ? (
                    <p>Ingelogd</p>
                )
                    : (<p>Niet ingelogd</p>)
            }
            <hr />
            <ListGroup>
                <ListGroupItem>
                    First Name: {auth?.lastName}
                </ListGroupItem>
                <ListGroupItem>
                    Last Name: {auth?.firstName}
                </ListGroupItem>
            </ListGroup>

        </>
    )
}

export default Header