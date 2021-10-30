import styled from 'styled-components';

export const SerachWrapper = styled.form`
    display: flex;
    margin: 3rem 0 1rem;
`;

export const SearchInput = styled.input`
    width: 23rem;
    height: 3.5rem;
    background-color: #e6e6e6;
    border: .1rem solid #bf9d6a;
    border-radius: .5rem 0 0 .5rem;
    font-family: inherit;
    font-size: 1.5rem;
`;

export const SearchButton = styled.button`
    width: 8rem;
    line-height: 3.5rem;
    background-color: #bf9d6a;
    border-radius: 0 .5rem .5rem 0;
    border: .1rem solid transparent;
    font-family: inherit;
    font-size: 1.5rem;
`;
