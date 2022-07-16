import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Highlight, { type HighlightSplit } from 'react-native-text-highlight';

export default function App() {
  // Generate a random color code
  const rc = () => `#${`${Math.random().toString(16)}000000`.substring(2, 8)}`;

  const split: HighlightSplit[] = [
    [0, 9, rc(), rc()],
    [20, 25, rc(), rc()],
    [31, 40, rc(), rc()],
  ];

  return (
    <View style={styles.container}>
      <Highlight
        style={styles.text}
        highlightColor={rc()}
        highlightTextColor={rc()}
      >
        Highlight the full sentence!
      </Highlight>
      <Highlight style={styles.text} split={split}>
        Highlight different parts of a sentence!
      </Highlight>
      <Highlight
        highlightColor={rc()}
        highlightTextColor={rc()}
        style={styles.text}
        highlightRegex={/(\d+)/g}
      >
        Highlight a sentence with RegEx! 12.234.54.676
      </Highlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
  },
});
