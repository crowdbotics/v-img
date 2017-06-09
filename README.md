# v-img
[![npm version](https://badge.fury.io/js/v-img.svg)](https://badge.fury.io/js/v-img)

> Image viewer never been that easy to setup. :foggy:

![demo gif](https://media.giphy.com/media/xUA7b26WKJvTa04lby/giphy.gif)

[More examples](https://crowdbotics.github.io/v-img/demo/index.html)

## Browser support

| Browser | Minimum version |
|:--:|:--:|
| Firefox (desktop) | 32 |
| Chrome (desktop) | 44 |
| Safari (desktop) | 9.1 |
| Opera (desktop) | 32 |
| Firefox (mobile) | :white_check_mark: |
| Chrome (mobile) | :white_check_mark: |
| Safari (mobile) | :white_check_mark: |

Browser support is one of the most important things of any javascript tool. Improving browser support with [BrowserStack](https://www.browserstack.com/) is the most convenient way to do it. Thanks them for supporting this particular project and open source at all.

![Browser Stack logo](https://www.browserstack.com/images/mail/browserstack-logo-footer.png)

## Getting started
1. Install plugin with yarn or npm
```bash
yarn add v-img
```
or
```bash
npm install v-img --save
```
2. Use plugin before creating Vue instance
```javascript
import Vue from 'vue';
import VueImg from 'v-img';

Vue.use(VueImg);
new Vue({...})
```
3. Add `v-img` directive to the image
```vue
<img v-img src="...">
```

## Available options
To open only one image don't specify any directive argument:
```vue
<img v-img src="...">
```
To specify groups of images (to be able to scroll around them when opened, show counter in top left corner) add similar argument to directives:
```vue
<img v-img:name src="...">
<img v-img:name src="...">
```
There are some available options we can specify as value of the directive:
```vue
<img v-img="{...}" src="...">
```
| Option | Description | Default value |
| :----: | :---------: | :-----------: |
| src    | Source of image will be displayed | src attribute from html tag|
| cursor| Cursor when hovering original `<img>` | 'pointer' |

## TODO :pencil:

- [ ] Preload all custom soruces of opened group
- [ ] Always show control bottons on mobiles
- [ ] Add tests
