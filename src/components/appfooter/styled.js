import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 50px;
  border-top: 1px solid #ddd;
  color: #767676;
  
  .wrapper{
    width: 1080px;
    margin: 0 auto;

    .service {
      padding: 30px 0;
      display: flex;
      justify-content: space-evenly;

      .subtitle {
        font-weight: 800;
        color: #484848;
        padding: 8px 0;
      }
  
      .info {
        .infoItem {
          padding: 2px 0;
          cursor: pointer;
  
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  
    .term {
      border-top: 1px solid #ddd;
      text-align: center;
      padding: 12px 0;
    }
  }
`