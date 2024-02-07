import styled from "styled-components";


export const RightWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 25px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.isTransparent ? '#fff' : props.theme.textColor.primaryColor};
  font-weight: 600;
  user-select: none;

  .menu {
    display: flex;
    align-items: center;
  }

  .btns {
    display: flex;
    align-items: center;
    
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: ${props => props.theme.isTransparent ? 'rgba(255, 255, 255, .25)' : '#f5f5f5'}; 
      }
    }
  }
  

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background: #fff;
    color: #44443e;
    border: 1px solid #ccc;
    border-radius: 25px;
    cursor: pointer;
    
    ${props => props.theme.mixin.boxShadow};



    .panel {
      font-size: 14px;
      position: fixed;
      top: 65px;
      right: 25px;
      width: 240px;
      border: 1px solid #eee;
      box-shadow: 0 0 3px rgba(0,0,0,.18);
      background-color: #fff;
      border-radius: 12px;

      .panel-top {
        border-bottom: 1px solid #ddd;
      }

      .panel-top, .panel-bottom {
        padding: 10px 0;

        .item {
          padding: 0px 16px;
          height: 50px;
          line-height: 50px;

          &:hover {
            background-color: #f1f1f1;
          }
        }
      }

      

    }
  }
`