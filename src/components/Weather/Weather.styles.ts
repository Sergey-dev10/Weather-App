import styled from 'styled-components';
import { device } from '../../common/devises';

export const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    @media ${device.mobileS} { 
        width: 100%;
      }
    @media ${device.mobileL} { 
        width: 100%;
      }
`;
