import styled from "styled-components";

export const DetailPicWrapper = styled.div`
  .pic_content {
    position: relative;
    display: flex;
    height: 600px;
    background-color: #000;
    cursor: pointer;
    
    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;;
        }
      }
    }

    .left {
      height: 100%;
      width: 50%;
      .item {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        }
      }

      &:hover {
          img {
            transform: scale(1.1);
          }
        }
      
    }

    .right {
      display: flex;
      width: 50%;
      height: 100%;
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      .item {
        position: relative;
        box-sizing: border-box;
        border-left: 0.5px solid #1f0c00;
        width: 50%;
        height: 50%;
        overflow: hidden;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }

        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    opacity: 0 !important;;
    transition: opacity 250ms ease;

  }

  img {
    transition: transform 250ms ease;
  }

  .browserBtn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5%;
    height: 5.5%;
    border-radius: 5px;
    right: 20px;
    bottom: 18px;
    background: #fff;
    z-index: 9;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      box-shadow: 2px 6px 6px rgba(0,0,0,.3);
    }

  }
`