import React from 'react'
import { StyleSheet, View } from 'react-native'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { CzView } from 'cz-view'

test('Renders without any options.', () => {
  const rendered = renderer.create(<CzView />)
  const tree = rendered.toJSON() as ReactTestRendererJSON

  expect(tree.type).toEqual('View')
})

test('Renders inside a View with initialCount prop.', () => {
  const styles = StyleSheet.create({
    color: {
      backgroundColor: 'red',
    },
  })

  const rendered = renderer.create(
    <View style={styles.color}>
      <CzView initialCount={45} />
    </View>
  )
  const tree = rendered.toJSON() as ReactTestRendererJSON

  expect(tree.props.style.backgroundColor).toEqual('red')
})
