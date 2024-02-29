'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import { TABLE_TYPE_PROPS, TableProps } from '@/types/types';
import Checkbox from '../Checkbox/Checkbox';

const Table = ({ type = 'dataLeft', children, src, check, subText, style, onClick }: TableProps) => {
  return (
    <Container type={type} style={style} onClick={onClick}>
      {check && <Checkbox />}
      <div className="subText-wrap">
        {children}
        {subText && <SubText>{subText}</SubText>}
      </div>
      {src && <Image src={src} width={20} height={20} alt="sort" />}
    </Container>
  );
};

export default Table;

const TABLE_TYPE = {
  ['headerLeft']: {
    width: '160px',
    padding: '13px 8px',

    fontSize: '14px',
    fontWeight: 500,

    background: color.gray.gray9,
    alignItems: 'center',
  },
  ['headerCenter']: {
    width: '160px',
    padding: '13px 8px',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '14px',
    fontWeight: 500,

    background: color.gray.gray9,
  },
  ['headerCheckbox']: {
    width: '36px',
    padding: '10px 8px',
    justifyContent: 'center',
    alignItems: 'center',

    background: color.gray.gray9,
  },
  ['dataLeft']: {
    width: '160px',
    padding: '10px 8px',
    borderBottom: ` 1px solid ${color.gray.gray6}`,
    alignItems: 'center',

    fontSize: '14px',

    fontWeight: 400,
  },
  ['dataCenter']: {
    width: '160px',
    padding: '10px 8px',
    borderBottom: ` 1px solid ${color.gray.gray6}`,
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '14px',

    fontWeight: 400,
  },
  ['dataSubtext']: {
    width: '160px',
    padding: '2px 8px',
    borderBottom: ` 1px solid ${color.gray.gray6}`,
    flexDirection: 'column',
    justifyContent: 'center',

    fontSize: '14px',

    fontWeight: 400,
  },
  ['dataMore']: {
    width: '36px',
    borderBottom: ` 1px solid ${color.gray.gray6}`,
    padding: '10px 8px',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Container = styled.div<TABLE_TYPE_PROPS>`
  ${({ type }) => TABLE_TYPE[type as 'headerLeft']};
  display: flex;

  height: 40px;

  box-sizing: border-box;

  color: ${color.gray.white};

  .subText-wrap {
    display: flex;
    flex-direction: column;
  }
`;

const SubText = styled.div`
  color: ${color.gray.gray5};

  font-size: 10px;

  font-weight: 400;
  line-height: 14px;
`;
