import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 128px;

  .text {
    padding: 0 0 8px 8px;
    font-size: 20px;
    font-weight: 700;
    color: #222;
  }

  .rooms {
    display: flex;
    flex-wrap: wrap;
  }
  
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`