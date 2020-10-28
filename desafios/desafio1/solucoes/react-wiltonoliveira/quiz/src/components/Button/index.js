import styled from 'styled-components';

const Button = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: .2s;
    
    &:hover{
    background-color: green;
}
`;

export default Button;
