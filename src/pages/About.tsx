import { IoBook } from 'react-icons/io5';
import styled from 'styled-components';
import { Container } from '../styles/DefaultStyles';

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <h1>
            About
            <span>
              <IoBook />
            </span>
          </h1>
          <ProjInfo>
            <p>
              <span>Author :</span>{' '}
              <a href="https://github.com/geekreflex">Jerry Nwosu</a>
            </p>
            <p>
              <span>Respository :</span>{' '}
              <a href="https://github.com/geekreflex/ts-user-card">
                TypeScript User Card
              </a>
            </p>
            <p>
              <span>Twitter :</span>{' '}
              <a href="https://twitter.com/geekreflex">@GeekReflex</a>
            </p>
            <div className="stack"></div>
          </ProjInfo>
        </Main>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    margin-bottom: 40px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 30px;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjInfo = styled.div`
  width: 500px;
  max-width: 100%;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  position: relative;
  background-color: ${(props) => props.theme.colors.bg};

  p {
    margin-bottom: 10px;
    span {
      font-weight: 600;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.blue};
    }
  }

  .stack {
    position: absolute;
    border: 1px solid ${(props) => props.theme.colors.secondary}50;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 12px;
    z-index: -1;
    left: 10px;
    bottom: -10px;
  }
`;

export default About;
