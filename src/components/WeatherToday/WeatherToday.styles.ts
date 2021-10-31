import styled from 'styled-components';
import { device } from '../../common/devises';

export const WrapperToday = styled.div`
    display: flex;
    flex-direction: column;
    justify-contect: center;
    margin-bottom: 2rem;
    color: #FFFFFF;

    .weather-today {
        display: flex;
        margin-bottom: 2rem;
    }
    .city {
        margin: 0.1rem;
        font-size: 6rem;
        font-weight: 550;

        @media ${device.mobileS} { 
            font-size: 5rem;
        }
    }
    .temp-block {
        display: flex;
        margin-right: 2rem;
    }
    .today-temp {
        font-size: 17rem;

        @media ${device.mobileS} { 
            font-size: 10rem;
        }
        @media ${device.mobileL} { 
            font-size: 14rem;
        }
    }
    .temp-sign {
        font-size: 10rem;

        @media ${device.mobileS} { 
            font-size: 5rem;
        }
        @media ${device.mobileL} { 
            font-size: 7rem;
        }
    }
    .forecast-today {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .forecast-icon {
        display: flex;
        justify-content:center;
        overflow: hidden;
    }
    .forecast-icon img {
        box-sizing: inherit;
    }
    .forecast-title {
        @media ${device.mobileS} { 
            font-size: 2rem;
        }
    }
    .forecast-title:first-letter {
        text-transform:capitalize;
    }

    .weather-details {
        display: flex;
        @media ${device.mobileL} { 
            flex-direction: column;
            align-items: center;
        }
    }

    .weather-details p {
        margin-right: 2rem;
        @media ${device.mobileL} {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }
    
    @media ${device.mobileL} { 
        width: 90%;
    }
    
`;
