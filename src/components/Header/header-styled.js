import styled from 'styled-components';

export const HeaderRoot = styled.header`
    display: flex;
    flex-direction: column;
    background-color: rgb(13 13 13);
    height: 100vh;
    flex: 0 0 15%;

    @media screen and (max-width: 900px){
        flex: 0 0 20%;
    }

    @media screen and (max-width: 650px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    a{
        margin: 30px auto;

        @media screen and (max-width: 650px){
            margin: 15px 30px;
        }

        img{
            width: 100px;
            border-radius: 10px;
            filter: grayscale(0.8);
            transition: filter 0.5s;

            &:hover{filter: grayscale(0);}

            @media screen and (max-width: 650px){
                width: 70px;
            }
        }
    }

    div.handleMenu{
        display: none;
        margin: 30px;
        color: #f19856;

        @media screen and (max-width: 650px){
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-family: 'DM Sans';
            border-right: 2px solid white;
            padding-right: 5px;
        }
    }

    ul{
        list-style: none;
        padding: 5px;
        margin: auto;

        @media screen and (max-width: 650px){
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 2;
            position: fixed;
            transition: all .5s;
            background-color: #0d0d0d;
            padding: 10px 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            box-shadow: 0px -1px 5px 0px gray;
        }

        a{
            text-decoration: none;
        }

        li{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 70px;
            cursor: pointer;
            transition: all 0.3s;
            flex: 0 0 25%;

            @media screen and (max-width: 650px){

                a{
                    display: flex;
                    align-items: center;
                    margin: 10px;
                    flex-direction: column;
                }
            }

            span{
                color: white;
                font-size: 0;
                font-family: monospace;
                transition: all 0.3s;

                @media screen and (max-width: 650px){
                    font-size: 14px;
                }
            }

            svg{
                color: white;
                width: 50px;
                height: auto;
                transition: all 0.3s;
            }

            &:hover{
                transition: all 0.3s;
                
                svg{ width: 0; }
                span{ font-size: 2rem; }

                @media screen and (max-width: 650px){
                    span{ font-size: 1.1rem; }
                }
            }
        }
    }
`
