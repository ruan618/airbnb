import styled from "styled-components";

export const SectionRoomsMoreWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  .more {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${props => props.$color};
    font-size: 17px;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 5px;
    }
  }
`