import styled  from "styled-components";


const Container = styled.aside `
  background-color: ${(props) => props.theme.colors.background};
  width: 36vw;
  height: 100vh;
  overflow-y: auto;
`;

export default Container;