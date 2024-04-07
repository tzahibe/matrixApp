import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import PostsFlat from './src/Posts/component/postsFlat';


function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <PostsFlat />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
