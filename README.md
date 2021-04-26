[![npm version](https://badge.fury.io/js/%40haoxuan8%2Freact-spin.svg)](https://www.npmjs.com/package/@haoxuan8/react-spin)

# @haoxuan8/react-spin

![demo](https://cdn.jsdelivr.net/gh/Haoxuan8/react-spin/screenshots/demo.gif)

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
| size            | number            | 42          | the size(`px`) of default indicator |
