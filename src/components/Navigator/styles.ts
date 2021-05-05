import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 0.5rem;

  width: 100%;
  height: 2.5rem;

  & > div.circle {
    width: 1rem;
    height: 1rem;
    background: var(--tertiary);
    border-radius: 50%;
  }

  > a {
    background: transparent;
    color: #dedede;
    font: 500 0.9rem 'Inter', sans-serif;
    cursor: pointer;
    text-decoration: none;

    border: 0;
    padding: 1rem;

    &.currentActive {
      font-weight: 700;
      font-family: 'Ibm plex sans', Arial;
      color: var(--link);
    }
  }
`;
