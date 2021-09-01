import React,{ Component } from 'react';
import { View } from '@tarojs/components';



class List extends Component<any, any> {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

export default List;

