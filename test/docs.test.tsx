import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { CzView } from 'cz-view'

test('README example renders correctly.', () => {
  const tree = renderer.create(
    <View>
      <CzView />
    </View>
  )

  expect(tree).toBeDefined()
})
