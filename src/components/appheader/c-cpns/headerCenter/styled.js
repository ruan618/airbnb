import styled from "styled-components";


export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  .search-bar {
    position: absolute;
    display: flex;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 8px;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-shadow: 0px 1px 3px rgba(0,0,0,.10);
    ${props => props.theme.mixin.boxShadow}

    cursor: pointer;
    
    .search-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 50%;

    }
  }
  .text-input {
    padding: 0 16px;
    color: #222;
    font-weight: 600;
    font-size: 14px;
  }


  .search_detail {
    position: relative;
    transform-origin: 50% 0 ;

    .infos {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
  }


  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }

`