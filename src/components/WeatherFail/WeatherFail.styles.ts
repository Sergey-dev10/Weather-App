import styled from 'styled-components';
import { device } from '../../common/devises';

export const Paragraph = styled.p`
    @media ${device.mobileL} { 
        font-size: 1.5rem;
    }
    @media ${device.mobileS} { 
        font-size: 1rem;
    }
`;
