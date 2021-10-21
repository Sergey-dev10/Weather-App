import React from 'react';
import { SearchInput, SearchButton, SerachWrapper } from './Search.styles';

export const Search = (): JSX.Element => (
  <SerachWrapper>
    <SearchInput type="text" />
    <SearchButton>Search</SearchButton>
  </SerachWrapper>
);
