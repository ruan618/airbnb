import styled from "styled-components";

export const SearchSectionWrapper = styled.div`
  display: flex;
  width: 850px;
  height: 66px;
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 32px;
  background: #fff;
  margin-top: 10px;
  box-shadow: 2px 2px 2px rgba(0,0,0, .2);
  
  .item {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 32px;
    &:hover {
      background-color: #eee; 
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      font-size: 12px;
      .title {
        font-weight: 800;
        color: #222;
      }
      .desc {
        color: #838383;
        font-size: 14px;
      }
    }
    .divider {
      height: 32px;
      width: 1px;
      background: #ddd;
    }
    
  }
`