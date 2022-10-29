import styled from 'styled-components';

type Props = {
  msg: string;
};

const ErrorMsg = ({ msg }: Props) => {
  return (
    <Wrapper>
      <span>{msg}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 12px;
  color: #ff0000;
`;

export default ErrorMsg;
