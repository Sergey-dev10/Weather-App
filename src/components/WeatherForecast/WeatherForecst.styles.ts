import styled from 'styled-components';
import { device } from '../../common/devises';

export const WrapperForecast = styled.div`
    display: flex;

    .forecast-week-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 9rem;
        margin: 0 15px 1vh;
        padding: 15px;
        background-color: #2b457b;
        border: 1px solid hsla(0, 0%, 100%, .5);
        border-radius: 0.5rem;
    }
    .forecast-week-icon img{
        width: 7.7rem;
        height: 7.7rem;
    }
    @media ${device.mobileS} { 
        flex-direction: column;
    }

    @media ${device.tablet} { 
        flex-wrap: wrap;
        justify-content: center;
    }
`;
