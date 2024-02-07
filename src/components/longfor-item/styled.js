import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  /* padding: 0 8px; */
  

  .inner {
    position: relative;
    cursor: pointer;
    padding: 8px;

    .cover {
      position: absolute;
      left: 8px;
      right: 8px;
      height: 50%;
      bottom: 0;
      border-radius: 0 0 6px 6px;
      /* background: rgba(0, 0, 0, 0.5); */
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }
  }

  

  .pic {
    img {
      width: 100%;
      border-radius: 6px;
    };
  }

  .text {
    font-size: 16px;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 12%;
    color: #fff;
    text-align: center;

    .dest {
      padding: 4px 0;
      font-weight: 600;
    }
  }
`