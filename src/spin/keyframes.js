import { keyframes } from 'styled-components'

export const popup = keyframes`
  0%    {transform: translateY(50%); opacity: 0;}
  50%   {transform: translateY(-10%); opacity: 1;}
  100%  {transform: translateY(0); opacity: 1;}
`

export const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const sweep = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
`
