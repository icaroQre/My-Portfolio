import styled from "styled-components";

const Bar = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100vw;
    background-color: #000000;
    opacity: 0.5;
    transition: all ease 0.4s;

    :hover{
        opacity: 1;
    }

    ul{
        display: flex;
        overflow: hidden;
        list-style-type: none;
    }
    ul li{
        color: white;
        font-size: 16px;
        font-family: 'Maven Pro', sans-serif;
        font-weight: 600;
        padding: 0px 30px 0px 30px;
        transition: all ease 0.2s;

        :hover{
            transform: scale(1.2);
            cursor: pointer;
        }
    }
`;
export default Bar;