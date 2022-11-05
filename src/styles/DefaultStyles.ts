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
    border: 1px solid ${(props) => props.theme.colors.border};
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

  input:not(:placeholder-shown) ~ label,
  textarea:not(:placeholder-shown) ~ label,
  input:focus ~ label,
  textarea:focus ~ label {
    top: -12px;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.bg};
    padding: 0 5px;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.btnBgDef};
  color: ${(props) => props.theme.colors.btnColorDef};
  padding: 13px 24px;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 300ms;

  :disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const ButtonClear = styled(Button)`
  background-color: transparent;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main};
  padding: 8px 10px;

  :hover {
    background-color: #eee;
  }
`;

export const ButtonDanger = styled(Button)`
  padding: 8px 10px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.danger};
  border: 1px solid ${(props) => props.theme.colors.danger};

  :hover {
    background-color: ${(props) => props.theme.colors.danger};
    color: white;
  }
`;
