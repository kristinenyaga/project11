import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Logo } from '../styles'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ currentUser }) => {
  const nav = useNavigate();
   
    function handleLogout() {
      fetch("/logout", { 
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin":"no-cors",
          "Content-Type": "application/json",
        } 
       }).then((r) => {
        if (r.ok) {
          // setUser(null);
          // setUser(null)
          nav("/login")
        }
      });
    }

  return (
    <Wrapper>
      <Nav>
        <Logo>{currentUser ? `User: ${currentUser.username}` : null}</Logo>
        <Button as={Link} to='/login' variant='outline'>Switch User?</Button>
        <Button onClick={handleLogout}>Log Out</Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  flex-direction: column;
  letter-spacing: 0.1rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  right: 8px;
`;

export default NavBar