import { color } from '@/styles/color';
import styled from '@emotion/styled';

export type InputSubMessageProps = {
  status: 'error' | 'success';
  children: string;
  validate: (value: any, params: any, passwordKey: any) => any;
};

const INFO_MESSAGE_STATUS = {
  error: color.secondary.error_1,
  success: color.brand.brandMain,
};

const InputSubMessage = ({ children, status }: InputSubMessageProps) => {
  return (
    <Container>
      <span className={INFO_MESSAGE_STATUS[status]}>{children}</span>
    </Container>
  );
};

export default InputSubMessage;

const Container = styled.div`
  margin-top: 5px;
  .infoMessage {
    font-size: 12px;
    letter-spacing: -0.8px;
    color: var(--active-color-blue);
  }

  .error {
    color: var(--error-color-red) !important;
  }
`;
