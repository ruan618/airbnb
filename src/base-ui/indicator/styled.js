import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .ind_content {
    display: flex;
    position: relative;
    transition: transform 250ms ease;
    > * {
      flex-shrink: 0;
    }
    
  }
  
`