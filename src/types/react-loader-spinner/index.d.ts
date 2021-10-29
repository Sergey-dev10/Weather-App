/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

declare module 'react-loader-spinner' {
  interface LoaderProps<T = {}> {

    visible?: boolean;

    type:
    'Audio'
    | 'BallTriangle'
    | 'Bars'
    | 'Circles'
    | 'Grid'
    | 'Hearts'
    | 'Oval'
    | 'Puff'
    | 'Rings'
    | 'TailSpin'
    | 'ThreeDots'
    | 'Watch'
    | 'RevolvingDot'
    | 'Triangle'
    | 'Plane'
    | 'MutatingDots'
    | 'CradleLoader';

    height?: number | string;

    width?: number | string;

    color?: string;

    secondaryColor?: string;

    timeout?: number;

    radius?: number;
  }
  export default class Loader extends React.Component<LoaderProps> {
    constructor(props: LoaderProps)
  }
}
