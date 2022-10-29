import styled from 'styled-components';
import { InputWrap } from '../../styles/DefaultStyles';
import ErrorMsg from './ErrorMsg';

type InputProps = {
  label?: string;
  name?: string;
  type?: string;
};

export const Input = ({
  label = 'No Label',
  name,
  type = 'text',
}: InputProps) => {
  return (
    <InputWrap>
      <input name={`${name}`} type={type} required />
      <label>{label}</label>
      {/* <ErrorMsg msg="error occured" /> */}
    </InputWrap>
  );
};

export const TextArea = ({ label = 'No Label', name, ...rest }: InputProps) => {
  return (
    <InputWrap>
      <textarea name={`${name}`} {...rest} required />
      <label>{label}</label>
      {/* <ErrorMsg msg="error occured" /> */}
    </InputWrap>
  );
};
