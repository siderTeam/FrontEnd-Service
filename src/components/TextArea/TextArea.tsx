'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import { TextareaProps } from '@/types/types';


const TextArea = ({ size = 'full', color = 'primary', style, textareaCount, ...rest }: TextareaProps) => {
  return (
    <Container>
      <StyledTextArea size={size} color={color} style={style} {...rest} />
      {
        <div className="text-length">
          {textareaCount !== undefined ? (
            <>
              {textareaCount}/{rest?.maxLength}
            </>
          ) : (
            <></>
          )}
        </div>
      }
    </Container>
  );
};
export default TextArea;

const TEXTAREA_TYPE = {
  ['full']: {
    display: 'flex',
    width: '100%',
    height: '112px',
    padding: '10px 20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '4px',

    borderRadius: '8px',
    border: `1px solid ${color.gray.gray6}`,
    background: 'none',
  },
  ['medium']: {
    width: 250,
  },
  ['large']: {
    width: 400,
  },
};

const COLOR_TYPE = {
  ['primary']: {
    color: color.gray.white,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
};

const Container = styled.div<any>`
  position: relative;

  .text-length {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

const StyledTextArea = styled.textarea<any>`
  ${({ size }) => TEXTAREA_TYPE[size as 'medium']};
  ${({ color }) => COLOR_TYPE[color as 'primary']};
  box-sizing: border-box;

  width: 100%;
  box-sizing: border-box;
  outline: none;
  resize: none;
  background: none;
`;
