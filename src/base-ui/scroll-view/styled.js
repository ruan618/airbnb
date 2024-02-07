import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 10px 0;
  
  .scroll {
    overflow: hidden;
    .slotContent {
      display: flex;
      transition: transform 250ms ease;
      white-space: nowrap;
  }
  }

  .scrollBtn {
    position: absolute;
    top: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    border-radius: 50%;
    background-color: #fff;
    z-index: 9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
    &:hover {
      background-color: #f2f2f2;
    }
    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }

    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
`