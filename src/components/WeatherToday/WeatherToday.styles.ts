import styled from 'styled-components';

export const WrapperToday = styled.div`
    display: flex;
    flex-direction: column;
    justify-contect: center;
    margin-bottom: 2rem;
    color: #FFFFFF;

    .weather-today {
        display: flex;
    }
    .city {
        margin: 0.1rem;
        font-size: 6rem;
        font-weight: 550;
    }
    .temp-block {
        display: flex;
        margin-right: 2rem;
    }
    .today-temp {
        font-size: 17rem;
    }
    .temp-sign {
        font-size: 10rem;
    }
    .forecast-today {
        display: flex;
        flex-direction: column;
    }
    .forecast-icon {
        display: flex;
        justify-content:center;
        align-item: center;
        overflow: hidden;
    }
    .forecast-icon img {
        box-sizing: inherit;
    }
    .forecast-title:first-letter {
        text-transform:capitalize;
    }
    
`;
