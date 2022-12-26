import styled from "styled-components";

const Section = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #111111;

    div{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        #name{
            font-size: calc(2rem + (1.5vw));
            margin-bottom: 4vh;
            font-weight: 600;
            letter-spacing: 0.3vw;
        }
        #title{
            font-size: calc(1rem + (0.5vw));
            margin-bottom: 2vh;
            letter-spacing: 0.4vw;
        }
    }

    div div{
        width: 70%;
        border-bottom: solid 2px lightgrey;
    }
`;
export default Section;