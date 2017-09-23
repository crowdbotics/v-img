<p align="center"><a href="https://v-img.review" target="_blank"><img width="775"src="logo.png"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/v-img"><img src="https://img.shields.io/npm/v/v-img.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/v-img"><img src="https://img.shields.io/npm/dm/v-img.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/v-img"><img src="https://img.shields.io/npm/l/v-img.svg" alt="License"></a>
</p>


<p align="center">
  <img src="https://media.giphy.com/media/xUA7b26WKJvTa04lby/giphy.gif" alt="Demonstration">
</p>

v-img is a plugin for [Vue.js](https://vuejs.org/) that allows you to show images in full-screen gallery by adding only one directive to the `<img>` tag.

[Demonstration page](https://v-img.review)

### Browser support
| Firefox | Chrome | Safari | Opera | Firefox (mobile)   | Chrome (mobile)    | Safari (mobile)    |
|:--:     |:--:    |:--:    |:--:   |:--:                |:--:                |:--:                |
| 32      | 44     | 9.1    | 32    | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Installation

#### npm
```
npm install v-img --save
```

## Getting started
In your script entry point:

```javascript
import Vue from 'vue';
import VueImg from 'v-img';

Vue.use(VueImg);
```

### Optional configurations
*in this snippet all settings has its default value. No need to specify them unless you want to change default behavior.
```javascript
const vueImgConfig = {
  // Consider alt of image as its title in gallery?
  altAsTitle: false,
}
Vue.use(VueImg, vueImgConfig);
```

## Usage

Add `v-img` directive to the image.
```vue
<img v-img src="...">
```

### Available options
Add similar directive arguments to place images to one gallery. (`:name` from the example below could be anything you want)
```vue
<img v-img:name src="...">
<img v-img:name src="...">
```

Options that could be specified in directive value

```vue
<img v-img="{...}" src="...">
```

| Option | Description | Default value |
| :----: | :---------: | :-----------: |
| group  | The same as directive argument, but could be set dynamically | directive argument or undefined |
| src    | Image source that will be displayed in gallery | src attribute value from html tag |
| title  | Caption that will be displayed | empty string or value of the `alt` attribute, if `altAsTitle` is true |
| opened | Function that will be executed on gallery open | undefined |
| closed | Function that will be executed on gallery close | undefined |
| changed(imageIndex) | Function that will be executed when switching between images in gallery | undefined |
| cursor | Cursor when hovering original `<img>` | 'pointer' |

* Any of these options except `opened`, `closed`, `changed` functions could be changed at runtime.
