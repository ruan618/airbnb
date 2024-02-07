import styled from "styled-components";

export const PicBrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #333;
  

  > .browser_cover {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;


    .cover_header {
      background-color: #333;
      position: relative;
      height: 86px;
      
      .icon_close {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 12px;
        top: 5px;
        color: #fff;
      }
    }

    .cover_content {
      display: flex;
      position: relative;
      flex: 1;

      .pic {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        left: 50%;
        height: 100%;
        overflow: hidden;
        width: 100%;
        max-width: 105vh;
        

        transform: translate(-50%, -50%);

        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          height: 100%;
          user-select: none;
        }
      }

      .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;

        &.content_left {
          left: 10px;
        }
        &.content_right {
          right: 10px;
        }
      }

    }


    .cover_footer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;

      .index_info {
        padding-bottom: 30px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        user-select: none;
        
      }
    }
  }

  .anim-enter {
    transform: translate(${(props => props.$isRight ? '100%' : '-100%')});
    opacity: 0;
  }

  .anim-enter-active {
    transform: translate(0);
    opacity: 1;
    transition: all 240ms ease;
  }

  .anim-exit {
    opacity: 1;
  }

  .anim-exit-active {
    opacity: 0;
    transition: all 240ms ease;
  }

  
`