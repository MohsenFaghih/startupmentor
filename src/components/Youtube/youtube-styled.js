import styled from 'styled-components';

export const YoutubeRoot = styled.div`
    margin: auto 0;
    width: fit-content;
    max-width: 100%;

    & > * {
        max-width: 100%;
    }

    @media screen and (max-width: 650px){
        margin: 20px auto;
        
        iframe{
            height: 200px;
        }
    }
`