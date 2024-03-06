import styled from '@emotion/styled';
import Button from '@/components/Button/Button';
import { color } from '@/styles/color';

interface Props {
  children: React.ReactNode;
  onClickSearch: () => void;
  onClickReset: () => void;
}

const SearchBar = ({ children, onClickSearch, onClickReset }: Props) => {
  return (
    <Container>
      <div className="contents">{children}</div>
      <div className="buttonWrapper">
        <Button onClick={onClickReset} size="small" variant="secondary">
          초기화
        </Button>
        <Button onClick={onClickSearch} size="small">
          검색
        </Button>
      </div>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  border-radius: 8px;
  box-sizing: border-box;
  padding-right: 4px;

  .contents {
    display: flex;
    height: 100%;
    flex: 1;
    align-items: center;
    box-sizing: border-box;

    .content {
      display: flex;

      .item {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 0px 10px;
        box-sizing: border-box;
      }

      &:first-child {
        label {
          border-left: none;
        }
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0px 40px;
      height: 40px;
      white-space: nowrap;
      border-left: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
      border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
      box-sizing: border-box;
      color: ${color.gray.white};
    }
  }

  .buttonWrapper {
    display: flex;
    gap: 4px;
    margin-left: 12px;
  }
`;
