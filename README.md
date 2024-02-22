# @wmm387/unocss-preset

[UnoCSS](https://unocss.dev/) Preset For Myself Use

<br>

### Install

```bash
pnpm add -D @wmm387/unocss-preset
```

<br>

### Usage

```js
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetWmm from '@wmm387/unocss-preset'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWmm(),
  ],
})
```

<br>
