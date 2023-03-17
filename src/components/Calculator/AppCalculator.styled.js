import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 20px 150px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// export const Title = styled.h1`
//   font-size: 50px;
//   font-weight: 700;
//   color: ${p => p.theme.colors.white};
//   text-align: center;
//   margin-bottom: 20px;
// `;
export const Container = styled.div`
  width: 450px;
  padding: 90px 20px 50px;
  box-shadow: 1px -1px 15px 12px rgba(69, 162, 158, 0.93);
  border-radius: 10px;
  background-color: rgba(31, 40, 51, 0.7);
`;
export const Input = styled.input`
  width: calc(100% - 10px);
  font-size: 50px;
  margin-bottom: 30px;
  border: 0;
  font-weight: 700;
  padding: 10px 5px;
  text-align: end;
  box-shadow: 1px 1px 4px 4px rgba(69, 162, 158, 0.93);

  background-color: ${p => p.theme.colors.white};
  &:active,
  &:focus {
    outline: transparent;
    background-color: ${p => p.theme.colors.white};
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Div1 = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;
export const Div2 = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;
export const Div3 = styled.div`
  width: 100%;
`;
export const Button1 = styled.button`
  width: 80px;
  height: 80px;
  font-size: 35px;
  font-weight: 700;
  border-radius: 20px;
  margin: 5px;

  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border: 0;
  transition: box-shadow 250ms ease, background-color 250ms ease,
    transform 250ms ease, color 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
    color: ${p => p.theme.colors.colorElement};
    background-color: ${p => p.theme.colors.colorText};
  }
`;
export const Button2 = styled.button`
  width: 80px;
  height: 80px;
  font-size: 35px;
  font-weight: 700;
  border-radius: 20px;
  margin: 5px;

  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border: 0;
  transition: box-shadow 250ms ease, background-color 250ms ease,
    transform 250ms ease, color 250ms ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.boxShadow};
    color: ${p => p.theme.colors.colorElement};
    background-color: ${p => p.theme.colors.colorText};
  }
`;
export const Button3 = styled.button`
  width: 80px;
  height: 80px;
  font-size: 35px;
  font-weight: 700;
  border-radius: 20px;

  &:last-child {
    width: 180px;
    height: 80px;
    margin-left: 10px;
  }
  &:first-child {
    width: 170px;
    height: 80px;
    margin-right: 10px;
  }

  color: ${p => p.theme.colors.btnСolorText};
  background-color: ${p => p.theme.colors.colorElement};
  border: 0;
  transition: box-shadow 250ms ease, background-color 250ms ease,
    transform 250ms ease, color 250ms ease;
  &:hover {
    transform: scale(1.07);
    box-shadow: ${p => p.theme.boxShadow};
    color: ${p => p.theme.colors.colorElement};
    background-color: ${p => p.theme.colors.colorText};
  }
`;
