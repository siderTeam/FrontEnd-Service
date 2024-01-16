import styled from "@emotion/styled";

type Props = {
  text: string;
  requireText?: string;
  isChecked: boolean;
  name: string;
  onChange: (e: any) => void;
  style?: React.CSSProperties;
};

const CheckBox = ({
  text,
  requireText,
  isChecked = false,
  name,
  onChange,
  style,
}: Props) => {
  return (
    <Container>
      <StyledCheckBox
        type='checkbox'
        checked={isChecked}
        name={name}
        onChange={onChange}
        style={style}
      />
      <StyledLabel>{text}</StyledLabel>
      <StyledRequire>{requireText}</StyledRequire>
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckBox = styled.input`
  border: 1px solid #f2f2f2;
`;

const StyledLabel = styled.div`
  font-size: 12px;
  margin-left: 4px;
`;

const StyledRequire = styled.div`
  font-size: 10px;
  color: #ff4e4e;

  margin-left: 4px;
`;
