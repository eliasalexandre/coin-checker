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
`;
