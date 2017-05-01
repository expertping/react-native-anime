import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import EasyAnimation from './src';

export default class Root extends Component {
  moveBox() {
  	//this.box
			//.opacity(0.5, { spring: { velocity: 50 } })
			//.start();

  	this.text
			.fontSize(15, { spring: { velocity: 50 } })
			.start()
  }

  stopBox() {
    this.box.stop();
  }

  reset() {
		this.box.reset();
	}

  render() {
    return (
      <View style={ styles.container }>
        <EasyAnimation.View ref={ ref => this.box = ref }
												 		style={{
															 width: 50,
															 height: 50,
															 backgroundColor: 'blue',
															 borderWidth: 2,
															 borderColor: 'red'
												 		}}>
          <View style={ styles.box }/>
        </EasyAnimation.View>

				<EasyAnimation.Text ref={ ref => this.text = ref }
														style={{ fontSize: 12, backgroundColor: '#dedede' }}>
					Lol
				</EasyAnimation.Text>

        <TouchableOpacity onPress={ () => this.moveBox() }>
          <View style={{ marginTop: 50,
                         width: 100,
                         height: 50,
                         borderRadius: 3,
                         backgroundColor: '#dedede',
                         justifyContent: 'center',
                         alignItems: 'center' }}>
            <Text>
              CLICK ME
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => this.stopBox() }>
          <View style={{ marginTop: 50,
						width: 100,
						height: 50,
						borderRadius: 3,
						backgroundColor: '#dedede',
						justifyContent: 'center',
						alignItems: 'center' }}>
            <Text>
              STOP ME
            </Text>
          </View>
        </TouchableOpacity>

				<TouchableOpacity onPress={ () => this.reset() }>
					<View style={{ marginTop: 50,
						width: 100,
						height: 50,
						borderRadius: 3,
						backgroundColor: '#dedede',
						justifyContent: 'center',
						alignItems: 'center' }}>
						<Text>
							RESET
						</Text>
					</View>
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 50,
    height: 50
  }
});

AppRegistry.registerComponent('ChainAnimations', () => Root);
