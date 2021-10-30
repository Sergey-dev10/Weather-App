import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchInput, SearchButton, SerachWrapper } from './WeatherSearch.styles';
import { fetchDataWeather } from '../../store/reducers/weatherSlice';

export const WeatherSearch = (): JSX.Element => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setCity(value);
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
      <SearchInput onChange={onChangeInput} type="text" value={city} />
      <SearchButton>Search</SearchButton>
    </SerachWrapper>
  );
};
