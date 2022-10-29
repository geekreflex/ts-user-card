import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  input,
  textarea {
    border: 1px solid #eee;
    width: 100%;
    padding: 15px 10px;
    border-radius: 5px;
    font-weight: 600;
    outline-color: ${(props) => props.theme.colors.main};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
  }

  input {
    height: 45px;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
    max-height: 200px;
  }

  label {
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
    transition: all 300ms ease-in-out;
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -12px;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.bg};
    padding: 0 5px;
  }
`;
