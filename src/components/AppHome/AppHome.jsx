import { Wrapper, Title, Text, Link, NavItem } from './AppHome.styled';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useAuth } from 'hooks';

export const AppHome = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Wrapper>
      <Title>Contact manager welcome page 📗</Title>
      <Text>
        Hello. My name is Andriy. If you are reading this text now, then you are
        on one of my projects. If you like it, you can use it for your own
        purposes. If you have an idea how to improve it, I will be grateful for
        the hint.{' '}
        <Link href="https://www.linkedin.com/in/andrii-beznosov/">
          <BsLinkedin />
        </Link>
        <br /> Link to{' '}
        <Link href="https://github.com/AndriiBeznosov">
          <BsGithub />
        </Link>
        <br />
        code I am Junior Front-End developer. I focus on HTML5, CSS3, JS, React.
        Development, practice and work on the result are important for me. I
        intend to develop innovative technologies and benefit people.
      </Text>
      {isLoggedIn && (
        <Text>
          To use the application you need to register, go to the tab
          <NavItem to="/register">Register</NavItem>
        </Text>
      )}
    </Wrapper>
  );
};
