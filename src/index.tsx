import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

export interface HighlightSplit {
  0: number;
  1: number;
  2?: string;
  3?: string;
}

interface Props {
  highlightColor?: string;
  highlightTextColor?: string;
  style?: StyleProp<TextStyle>;
  highlightStyle?: StyleProp<TextStyle>;
  children?: string;
  split?: HighlightSplit[];
}

const Highlight = (props: Props) => {
  const highlightStyle: TextStyle = {
    color: props.highlightTextColor,
    backgroundColor: props.highlightColor,
  };

  let split: HighlightSplit[] = [];

  split = props.split?.sort((a, b) => a[0] - b[0]) || [];

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
          props.highlightStyle,
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

  const isSplitArrayCorrect = () => {
    if (split[0]![0] > split[0]![1]) {
      console.warn('Split start value needs to be less than the end value');
      return false;
    }

    let highest = split[0]![1];
    for (let i = 1; i < split.length; i++) {
      if (split[i]![0] < highest) {
        console.warn('Split array values can not overlap');
        return false;
      }
      if (split[i]![0] > split[i]![1]) {
        console.warn('Split start value needs to be less than the end value');
        return false;
      }
      highest = split[i]![1];
    }

    return true;
  };

  if (!props.split || props.split.length === 0 || !isSplitArrayCorrect()) {
    return <Text style={[highlightStyle, props.style]}>{props.children}</Text>;
  }

  return <Text style={props.style}>{splitString(0, 0)}</Text>;
};

const defaultProps: Partial<Props> = {
  highlightTextColor: 'white',
  highlightColor: 'black',
};

Highlight.defaultProps = defaultProps;

export default Highlight;
