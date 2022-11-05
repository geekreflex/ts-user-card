import styled from 'styled-components';

type Props = {
  checked: boolean;
  onCheck: any;
  name: string;
};
const Switch = ({ checked, onCheck, name }: Props) => {
  return (
    <Wrapper htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onCheck}
      />
      <div className="toggler"></div>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;

  .toggler {
    width: 30px;
    height: 15px;
    background-color: #ccc;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all 300ms;

    ::before {
      content: '';
      width: 15px;
      height: 100%;
      border-radius: 50%;
      background-color: #555;
      position: absolute;
      border: 2px solid #ddd;
      transition: all 300ms;
    }
  }

  input:checked + .toggler:before {
    background-color: blue;
    transform: translateX(15px);
  }

  input {
    opacity: 0;
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
  }
`;

export default Switch;
