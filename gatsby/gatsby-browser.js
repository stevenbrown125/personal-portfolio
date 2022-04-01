/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/global.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}> {element}</Layout>;
}
