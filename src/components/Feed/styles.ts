import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
`;

export const Tab = styled.button`
  margin-top: 10px;
  padding: 15px;

  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 1px solid var(--outline);

  &.active,
  &:focus {
    border-bottom: 2px solid var(--twitter);
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
