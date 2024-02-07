import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  

  &.fixed {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
  }

  .content {
    position: relative;
    z-index: 19;
    transition: all 300ms ease;
    background: ${props => props.theme.isTransparent ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
    border-bottom: 1px solid #eee;
    border-color: ${props => props.theme.isTransparent ? 'rgba(255, 255, 255, 0)' : 'rgba(238,238,238, 1)'};
    /* box-shadow: ${props => props.theme.isTransparent ? '' : '0px 2px 3px rgba(0, 0, 0, .1)'}; */
    .top_content {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .35)
    }
`

export const SearchContentWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.$ifDetail ? '100px' : '0px'};
`