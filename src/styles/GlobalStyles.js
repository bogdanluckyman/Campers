import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
body {
font-family: 'Roboto', sans-serif; 
background-color: ${colors.white};
margin: 0; 
padding: 0; 
}

a {  
text-decoration: none; 
}

a:hover {
text-decoration: underline; 
}

li {
    list-style: none;
}

img {
max-width: 100%;
height: auto; 
}
`;

export default GlobalStyles;
