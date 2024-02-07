import styled from "styled-components";

export const SearchTabWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  color: ${props => props.theme.isTransparent ? '#fff' : '#000'};

  .item {
    box-sizing: border-box;
    margin: 0 10px;
    padding-bottom: 6px;
    font-size: 16px;

  }
  .active {
    border-bottom: 2px solid #2f2f2f;
    border-color: ${props => props.theme.isTransparent ? '#f1f1f1' : '#2f2f2f'};
  }
`