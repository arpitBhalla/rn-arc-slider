# React Native Arc Slider

## :rocket: Getting Started

### Install

- Install the library and react-native-svg

  ```bash
  $ npm i --save rn-arc-slider react-native-svg
  ```

- Link native code for SVG

  ```bash
  $ npx react-native link react-native-svg
  ```

### Import Circular Slider

```jsx
import CircularSlider from "react-native-circular-slider";
```

Use as follows:

```jsx
<CircularSlider
  value={value}
  onChange={setValue}
  trackColor={"red"}
  showThumbText
  showText
/>
```

## :sparkles: Props

<!-- props-start -->

| Prop Name        | Type                     | Default   | Description               |
| ---------------- | ------------------------ | --------- | ------------------------- |
| `trackRadius`    | number                   | `100`     | Radius of Circular Slider |
| `thumbRadius`    | number                   | `12`      |                           |
| `trackWidth`     | number                   | `5`       |                           |
| `value`          | number                   | `0`       |                           |
| `onChange`       | ((angle: number) => any) | `none`    |                           |
| `trackColor`     | string                   | `#2089dc` |                           |
| `thumbColor`     | string                   | `#2089dc` |                           |
| `trackTintColor` | string                   | `#e1e8ee` |                           |
| `thumbTextColor` | string                   | `white`   |                           |
| `thumbTextSize`  | number                   | `10`      |                           |
| `noThumb`        | boolean                  | `false`   |                           |
| `showText`       | boolean                  | `false`   |                           |
| `showThumbText`  | boolean                  | `false`   |                           |
| `textColor`      | string                   | `#2089dc` |                           |
| `textSize`       | number                   | `80`      |                           |
| `minimumValue`   | number                   | `0`       |                           |
| `maximumValue`   | number                   | `100`     |                           |
| `maxAngle`       | number                   | `359.9`   |                           |
| `minAngle`       | number                   | `0`       |                           |

<!-- props-end -->

## :handshake: Contribution

All PRs are welcome

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/arpitBhalla" target="_blank">Arpit Bhalla</a>

&#xa0;

<a href="#top">Back to top</a>
