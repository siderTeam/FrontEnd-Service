'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { TextareaProps } from '@/types/types';

const TextArea = ({ size = 'full', color = 'primary', style, textareaCount, maxLength, onChange, value, ...rest }: TextareaProps) => {
  return (
    <Container size={size}>
      <StyledTextArea color={color} style={style} onChange={onChange} value={value} {...rest} />
      {textareaCount !== undefined && (
        <div className="text-length">
          {textareaCount}/{maxLength}
        </div>
      )}
    </Container>
  );
};
export default TextArea;

const TEXTAREA_TYPE = {
  ['full']: {
    padding: '10px 20px',

    borderRadius: '8px',
    border: `1px solid ${color.gray.gray6}`,
    background: 'none',
  },
};

const COLOR_TYPE = {
  ['primary']: {
    color: color.gray.white,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  ['disabled']: {
    color: color.gray.gray7,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 'normal',
  },
};

const Container = styled.div<any>`
  ${({ size }) => TEXTAREA_TYPE[size as 'full']};
  box-sizing: border-box;

  .text-length {
    color: ${color.gray.white};
    font-size: 14px;
    font-weight: 400;
    text-align: end;
  }
`;

const StyledTextArea = styled.textarea<any>`
  ${({ color }) => COLOR_TYPE[color as 'primary']};

  border: none;

  width: 100%;
  box-sizing: border-box;
  outline: none;
  resize: none;
  background: none;
`;
