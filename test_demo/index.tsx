import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { SiBadge } from 's-mini-ui';

import './index.less';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <SiBadge label='按钮'></SiBadge>
      </View>
    )
  }
}
