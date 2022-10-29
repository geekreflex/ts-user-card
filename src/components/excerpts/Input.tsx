import styled from 'styled-components';
import { InputWrap } from '../../styles/DefaultStyles';
import ErrorMsg from './ErrorMsg';

type InputProps = {
  label?: string;
  name: string;
  type?: string;
  method: any;
  rest?: any;
};

export const Input = ({
  label = 'No Label',
  name,
  type = 'text',
  method,
  ...rest
}: InputProps) => {
  const { formState: errors } = method;

  return (
    <InputWrap>
      <input name={`${name}`} type={type} placeholder=" " {...rest} />
      <label>{label}</label>
      {errors && errors[name] && <ErrorMsg msg={errors[name].message} />}
    </InputWrap>
  );
};

export const TextArea = ({
  label = 'No Label',
  name,
  method,
  ...rest
}: InputProps) => {
  const { formState: errors } = method;
  return (
    <InputWrap>
      <textarea name={`${name}`} placeholder=" " {...rest} />
      <label>{label}</label>
      {errors && errors[name] && <ErrorMsg msg={errors[name].message} />}
    </InputWrap>
  );
};
