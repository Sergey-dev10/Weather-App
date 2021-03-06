import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchInput, SearchButton, SerachWrapper } from './Search.styles';
import { fetchDataWeather } from '../../store/reducers/actions';

export const Search = (): JSX.Element => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };
  const onSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (city) {
      dispatch(fetchDataWeather(city));
      setCity('');
    }
  };
  return (
    <SerachWrapper onSubmit={onSearch}>
      <SearchInput onChange={onChangeInput} type="text" placeholder="Enter City" value={city} />
      <SearchButton>Search</SearchButton>
    </SerachWrapper>
  );
};
