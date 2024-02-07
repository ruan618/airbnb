import styled from "styled-components";

export const RoomWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.$roomItemWidth};
  cursor: pointer;

  .inner {
    padding: 8px;
    

    .slider {
      position: relative;
      cursor: pointer;

      &:hover {
        .control {
          display: flex;
        }
      }


      .ind {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
        width: 30%;
        color: #fff;

        .dotBox {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;

          .dot {
            
            width: 8px;
            height: 8px;
            background: #fff;
            border-radius: 50%;;

            &.active {
              background: #fff;
              width: 13px;
              height: 13px;
              box-shadow: 0 4px 6px rgba(0,0,0,0.25);
            }
          }
        }
      }

      .control {
        z-index: 1;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: space-between;
        color: #fff;

        .left_btn, .right_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.25) 100%)

          /* &:hover {
            
          } */
        }

        .right_btn {
          background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%)
        }
    }

    
    }

    .img_cover {
      position: relative;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 66.6% 8px 0;
      overflow: hidden;
      
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
      }
    }

    .room_detail {
      margin: 10px 0 6px;
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.$verifyInfo};
    }
    
    .room_title {
      font-size: 16px;
      font-weight: 700;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2em;
      min-height: 2.4em;
    }

    .room_price {
      margin: 8px 0 3px;
      font-size: 12px;
      color: #484848;
    }

    .bottom {
      font-size: 12px;
      align-items: center;
      display: flex;
      font-weight: 600;
      .reviews_count {
        font-weight: 400;
        font-size: 10px;
      }
    }
  }
`