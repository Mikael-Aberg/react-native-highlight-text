import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface Test {
  0: number;
  1: number;
  2?: string;
  3?: string;
}

interface Props {
  highlightColor?: string;
  highlightTextColor?: string;
  style?: StyleProp<TextStyle>;
  children?: string;
  split?: Test[];
}

const Highlight = (props: Props) => {
  const highlightStyle: TextStyle = {
    color: props.highlightTextColor,
    backgroundColor: props.highlightColor,
  };

  const splitString = (
    index: number,
    prev: number
  ): React.ReactElement | null => {
    const {
      0: start,
      1: end,
      2: color,
      3: backgroundColor,
    } = props.split?.[index] || [];
    if (start === undefined || end === undefined) {
      console.warn(`Index ${index} contains undefined value`);
      return null;
    }

    const pre = <Text>{props.children?.substring(prev, start)}</Text>;
    const cur = (
      <Text
        style={[
          highlightStyle,
          {
            color: color || props.highlightTextColor,
            backgroundColor: backgroundColor || props.highlightColor,
          },
          props.style,
        ]}
      >
        {props.children?.substring(start, end)}
      </Text>
    );

    return index + 1 !== props.split?.length ? (
      <>
        {pre}
        {cur}
        {splitString(index + 1, end)}
      </>
    ) : (
      <>
        {pre}
        {cur}
        <Text>{props.children?.substring(end)}</Text>
      </>
    );
  };

  // Hello world!
  // Hel|lo |wo|rld!

  if (!props.split || props.split.length === 0) {
    return <Text style={[highlightStyle, props.style]}>{props.children}</Text>;
  }

  return <Text>{splitString(0, 0)}</Text>;
};

const defaultProps: Partial<Props> = {
  highlightTextColor: 'white',
  highlightColor: 'black',
};

Highlight.defaultProps = defaultProps;

export default Highlight;
