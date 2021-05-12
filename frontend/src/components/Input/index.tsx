import React, {
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <input
        defaultValue=""
        {...rest}
        type="text"
      />
    </Container>
  );
};

export default Input;
