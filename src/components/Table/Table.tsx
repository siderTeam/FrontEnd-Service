'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/CommonStyles';
import CheckBox from '../CheckBox/CheckBox';
import Image from 'next/image';
import { TABLE_TYPE_PROPS, TableProps } from '@/types/types';

const Table = ({ type = 'dataLeft', children, check, subText, style }: TableProps) => {
  return (
    <Container type={type} style={style}>
      {check && <CheckBox />}
      {children}
      {subText && <SubText>{subText}</SubText>}
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

    background: color.gray9,
    alignItems: 'center',
  },
  ['headerCenter']: {
    width: '160px',
    padding: '13px 8px',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '14px',
    fontWeight: 500,

    background: color.gray9,
  },
  ['headerCheckbox']: {
    width: '36px',
    padding: '10px 8px',
    justifyContent: 'center',
    alignItems: 'center',

    background: color.gray9,
  },
  ['dataLeft']: {
    width: '160px',
    padding: '10px 8px',
    borderBottom: `1px solid ${color.gray6}`,
    alignItems: 'center',

    fontSize: '14px',
    fontWeight: 400,
  },
  ['dataCenter']: {
    width: '160px',
    padding: '10px 8px',
    borderBottom: `1px solid ${color.gray6}`,
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '14px',
    fontWeight: 400,
  },
  ['dataSubtext']: {
    width: '160px',
    padding: '2px 8px',
    borderBottom: ` 1px solid ${color.gray6}`,
    flexDirection: 'column',
    justifyContent: 'center',

    fontSize: '14px',
    fontWeight: 400,
  },
  ['dataMore']: {
    width: '36px',
    borderBottom: ` 1px solid ${color.gray6}`,
    padding: '10px 8px',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Container = styled.div<TABLE_TYPE_PROPS>`
  ${({ type }) => TABLE_TYPE[type as 'headerLeft']};
  box-sizing: border-box;
  display: flex;
  min-height: 40px;

  color: ${color.white};
`;

const SubText = styled.div`
  color: ${color.gray5};
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`;
