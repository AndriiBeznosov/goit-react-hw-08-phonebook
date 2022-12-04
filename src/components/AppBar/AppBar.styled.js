import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  box-shadow: ${p => p.theme.boxShadow};
  background-color: rgba(11, 12, 16, 0.6);
  /* margin-bottom: 30px; */
  /* background-color: ${p => p.theme.colors.backgroundColorsPrimary}; */
`;
