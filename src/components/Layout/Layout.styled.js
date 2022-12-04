import styled from 'styled-components';
import img from '../../images/zadnii-fon-dlya-intro.jpeg';

export const Wrapper = styled.div`
  /* background-color: ${p => p.theme.colors.backgroundColorsPrimary}; */
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* min-height: 100vh; */
  /* height: 100vh; */
  width: 1200px;
  margin: 0 auto;
  box-shadow: ${p => p.theme.boxShadow};
  /* background-color: rgba(11, 12, 16, 0.6); */
`;
