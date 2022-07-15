import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Highlight from 'react-native-text-highlight';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'red',
        }}
      >
        Hello
      </Text>
      <Highlight
        split={[
          [0, 1],
          [2, 7, 'red', 'blue'],
        ]}
      >
        Hello world!
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
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
