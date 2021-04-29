[![npm version](https://badge.fury.io/js/%40haoxuan8%2Freact-spin.svg)](https://www.npmjs.com/package/@haoxuan8/react-spin)
[![npm dw](https://img.shields.io/npm/dw/@haoxuan8/react-spin)](https://www.npmjs.com/package/@haoxuan8/react-spin)
# @haoxuan8/react-spin

![demo](https://cdn.jsdelivr.net/gh/Haoxuan8/react-spin/screenshots/demo.gif)

[live demo](https://haoxuan8.github.io/react-spin/)

## Install

```bash
npm install @haoxuan8/react-spin -S
```
## Usage

```javascript
import Spin from '@haoxuan8/react-spin'

render(
  <Spin spinning>
    <div>Content</div>
  </Spin>,
  document.querySelector('#root')
)
```

## Static Method

- `Spin.setDefaultIndicator(indicator: ReactNode)`
- `Spin.clearDefaultIndicator()`


## Props

| Name            | Type              | Default     | Description                        |
| ---             | ---               | ---         | ---                                |
| spinning        | Boolean           | false       | Spinning                           |
| indicator       | ReactNode         | undefined   | Custom icon when loading. Hide indicator if set indicator as `null` | 
| opacity         | Number            | 0.5         | The opacity of content when loading             |
| tip             | String            | undefined   | The text below indicator           |
| mainColor       | String            | `#409eff`   | The color of default indicator     |
| fontColor       | String            | `#409eff`   | The color of tip                   |
| size            | Number            | 42          | The size(`px`) of default indicator |
| maxHeight       | Number &#124; `none`    | 400         | Default maxHeight(`px`) of indicator container. Indicator will be placed in the center of that container. If you want to place indicator in the center of children, just set this attribute as `none`|
