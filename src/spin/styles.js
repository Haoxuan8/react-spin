import styled, { css } from 'styled-components'
import {
  popup,
  sweep,
  rotate,
} from './keyframes'

export const Container = styled.div`
  position: relative;
`

export const SpinContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;

  max-height: ${props => typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : 'none'};

  &[data-spinning='delete'] {
    display: none;
  }
`

export const SpinWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${popup} .45s ease 0s forwards;

  &[data-spinning='false'] {
    animation: spinning__close 0.45s ease 0s forwards;
  }
  @keyframes spinning__close {
    from { transform: scale(1); opacity: 1; }
    to   { transform: scale(0); opacity: 0; }
  }
`


export const DefaultIndicator = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 50%;
  border: ${props => props.size / 12}px solid ${props => props.mainColor};
  box-sizing: border-box;
  animation: ${sweep} 1s linear alternate infinite,
            ${rotate} .8s linear infinite;
  }
`

export const Text = styled.div`
  margin-top: 5px;
  font-size: 14px;
  max-width: 120px;
  word-break: break-all;
  text-overflow: clip;
  white-space: normal;
  text-align: center;
  color: ${props => props.fontColor}
`

export const ContentContainer = styled.div`
  transition: opacity .45s;

  &[data-spinning='true'] {
    opacity: ${props => props.opacity};
    overflow: hidden;
  }

  &[data-spinning='false'] {
    opacity: 1;
  }
`
