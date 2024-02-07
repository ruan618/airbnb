import styled from "styled-components";

export const SectionTabWrapper = styled.div`
  .item {
    box-sizing: border-box;
    padding: 14px 16px;
    border: 0.5px solid #d8d8d8;
    margin-right: 18px;
    ${props => props.theme.mixin.boxShadow};
    flex-basis: 120px;
    flex-shrink: 0;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 4px;
    font-size: 17px;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }

`