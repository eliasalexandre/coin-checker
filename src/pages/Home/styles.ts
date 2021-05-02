import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > nav {
    display: flex;
    flex-direction: column;

    padding: 0.5rem;
    background: var(--secondary);

    h3 {
      font: 400 0.9rem 'Ibm plex sans', sans-serif;
    }

    form {
      position: relative;
      display: flex;

      padding-left: 0.5rem;
      margin: 0.5rem 0;
      height: 3rem;
      width: 100%;

      input {
        height: 100%;
        width: 100%;
        padding: 0.3rem 0.7rem;
        font: 500 1.2rem 'Ibm plex sans', sans-serif;
        color: #dedede;

        border: 0.5px solid #afd2ec;
        border-radius: 0.4rem;
        background: transparent;
      }
    }
  }

  > main {
    display: flex;
    flex-direction: column;

    border-radius: 27px 27px 0 0;

    > div.header {
      height: 4.5rem;
      padding: 0 0.5rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */

      > span {
        font: 500 1.3rem 'Inter', sans-serif;
      }

      button {
        cursor: pointer;
        border: 0;
        border-radius: 0.6rem;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 10rem;
        height: 1.5rem;
        font-size: 0.8rem;

        &:hover {
          filter: brightness(90%);
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;

      max-height: 15rem;
      overflow: hidden;
      overflow-y: auto;
    }
  }
`;

export const Element = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 0.4rem;
  margin: 0.2rem 0;
  padding: 0.5rem 0;

  > div {
    display: flex;
    align-items: center;
  }

  > div#coin-h {
    flex: 1;
    border-right: 3px solid rgba(0, 0, 0, 1);
  }
  > div#coin-b {
    margin: 0 0.8rem;
  }
`;
