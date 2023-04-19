import styled from 'styled-components';

export const WelcomeRoot = styled.div`
    color: #e0e0e0;
    font-family: DM Sans;

    h1{
        font-size: 3rem;
        margin-bottom: 10px;
        background: -webkit-linear-gradient(#787878, #eee, #787878);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media screen and (max-width: 650px){
            font-size: 2rem;
            margin-top: 10px;
            text-align: center;
        }
    }
     
    p{
        width: 60%;
        font-size: 1.5rem;
        line-height: 30px;
        letter-spacing: -1px;
        background: -webkit-linear-gradient(#c8c8c8, white, #c8c8c8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 10px;

        @media screen and (max-width: 900px){
            width: 100%;
        }

        @media screen and (max-width: 650px){
            font-size: 1.3rem;
            text-align: center;
        }
    }
`