import styled from "styled-components";


export const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.isTransparent ? '#fff' : props.theme.color.primaryColor};
  display: flex;

  .logo {
    margin-left: 30px;
    cursor: pointer;
  }
`