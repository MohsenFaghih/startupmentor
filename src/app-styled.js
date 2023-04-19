import styled from 'styled-components';

export const Root = styled.div`
    background: url(${props => props.bg});
    content: "";
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    max-width: 1440px;
    height: auto;
    display: flex;
    margin: auto;

    @media screen and (max-width: 650px){
        flex-direction: column;
    }

    main{
        padding: 50px 50px 0 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 90vh;
        overflow: auto;
        overflow-x: hidden;

        &:-webkit-scrollbar {
            width: 0;  
            background: transparent; 
        }

        &:-webkit-scrollbar-thumb {
            background: #FF0000;
        }

        @media screen and (max-width: 650px){
            padding: 20px 10px 120px 10px;
            height: auto;
        }
    }

`