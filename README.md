# react-native-text-highlight

A simple way to highlight text in React Native

## Installation

```sh
npm install --save react-native-text-highlight
```

```sh
yarn add react-native-text-highlight
```

## Usage

Highlight full text

```js
import Highlight from 'react-native-text-highlight';

<Highlight highlightColor="blue" highlightTextColor="white">
  Highlight the full sentence!
</Highlight>;
```

Highlight specific parts of the text

```js
import Highlight, { type HighlightSplit } from 'react-native-text-highlight';

const split: HighlightSplit[] = [
  [0, 9],
  [20, 25, 'green', 'orange'],
  [31, 40],
];

<Highlight highlightColor="blue" highlightTextColor="white" split={split}>
  Highlight different parts of a sentence!
</Highlight>;
```

Highlight using a RegEx

```js
import Highlight from 'react-native-text-highlight';

<Highlight
  highlightColor="blue"
  highlightTextColor="white"
  highlightRegex={/(\d+)/g}
>
  Highlight a sentence with RegEx! 12.234.54.676
</Highlight>;
```

## Highlight component

If both split and highlightRegex props are not provided the full string will be highlighted

| Prop               | Type                 | Default | Description                                                                                                        |
| ------------------ | -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| highlightColor     | string               | white   | The background color of the highlighted parts of the text                                                          |
| highlightTextColor | string               | black   | The text color of the highlighted parts of the text                                                                |
| style              | StyleProp<TextStyle> |         | Style for the full text                                                                                            |
| highlightStyle     | StyleProp<TextStyle> |         | Style for the highlighted parts of the tex                                                                         |
| children           | string               |         | The string to be shown                                                                                             |
| split              | HighlightSplit[]     |         | A list of ranges to highlight. Created like [startIndex, endIndex, optional background color, optional text color] |
| highlightRegex     | RegExp               |         | A regex used to highlight parts of the text. g flag is required. Will overwrite split prop                         |

## License

MIT
