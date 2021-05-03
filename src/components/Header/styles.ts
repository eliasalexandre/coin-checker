import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;
  border-bottom: 1px solid white;

  -webkit-user-select: none;
  -webkit-app-region: drag;

  strong {
    font-size: 13px;
    font-weight: 400;
    color: #999;
  }
`;

interface WindowActionsProps {
  position: 'left' | 'right';
  shouldShowIconsOnHover?: boolean;
}

export const WindowActions = styled.div<WindowActionsProps>`
  position: absolute;
  top: 0;

  height: 100%;
  display: flex;
  align-items: center;

  ${(props) =>
    props.position === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `};
  ${(props) =>
    props.shouldShowIconsOnHover &&
    css`
      &:hover svg {
        display: block;
      }
    `}
`;

export const DefaultActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  & + button {
    margin-left: 12px;
  }
  &:hover svg {
    color: #dfdfdf;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`;
