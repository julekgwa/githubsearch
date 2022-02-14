import styled from '@emotion/styled';
import React from 'react';
import { Rings } from 'react-loader-spinner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Spinner = () => {
  return (<Container>
    <Rings color="#00BFFF" height={130} width={130} /></Container>
  )
}

export default Spinner;