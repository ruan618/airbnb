import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  .pagination{
    display: flex;
    flex-direction: column;
    align-items: center;

    .page_desc {
      margin-top: 10px;
    }

    .MuiPaginationItem-page:hover {
      text-decoration: underline;
    }

    .MuiPaginationItem-page.Mui-selected {
      background: #000;
      color: #fff;
    }
  }
`
