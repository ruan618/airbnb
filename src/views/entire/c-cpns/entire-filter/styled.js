import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  z-index: 98;
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f2f2f2;
  height: 48px;
  display: flex;
  align-items: center;
  background: #fff;
  .filter {
    display: flex;

    .item {
      margin: 0 6px 0 8px;
      border: 1px solid #dce0e0;
      padding: 6px 12px;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      &:hover {
        ${props => props.theme.mixin.boxShadow}
      }

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
  }
`