import styled from "@emotion/styled";

type STYLE_PROPS = {
  size?: "small" | "medium" | "large";
};

type Props = STYLE_PROPS & {
  options: string[];
  value: string;
  name?: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
};

const SelectBox = ({
  size = "medium",
  value,
  name,
  options,
  onChange,
  style,
}: Props) => {
  return (
    <>
      <StyledSelect
        size={size}
        value={value}
        name={name}
        onChange={onChange}
        style={style}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default SelectBox;

const SELECT_TYPE = {
  ["small"]: {
    width: 150,
    height: 30,
  },
  ["medium"]: {
    width: 250,
    height: 30,
  },
  ["large"]: {
    width: 400,
    height: 30,
  },
};

const StyledSelect = styled.select<any>`
  ${({ size }) => SELECT_TYPE[size as "medium"]};

  font-size: 12px;

  border: 1px solid #a7a7a7;
  border-radius: 6px;
  outline: none;

  padding: 0 10px;
  box-sizing: border-box;
`;
