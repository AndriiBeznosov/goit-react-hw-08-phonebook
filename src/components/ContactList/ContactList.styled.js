import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  padding: 15px 15px;
  background-color: ${p => p.theme.colors.backgroundColors};
  border-radius: 10px;
  min-height: 100px;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  font-style: italic;
  display: grid;
  grid-template-columns: 190px 180px auto;
  grid-column-gap: 10px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border-radius: 5px;
  padding: 2px 10px;
  border: 0;
  transition: box-shadow 250ms ease, transform 250ms ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
  }
`;
