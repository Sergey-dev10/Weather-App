import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const WeatherLoader = (): JSX.Element => (
  <Loader
    type="Oval"
    color="#00BFFF"
    height={80}
    width={80}
    timeout={3000}
  />
);
