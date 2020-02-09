import { AppLoading } from 'expo';
import React, { useState, Component, FlatList } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import Canvas from 'react-native-canvas';
import SwiperFlatList  from 'react-native-swiper-flatlist';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import Modal, { ModalContent, BottomModal } from 'react-native-modals';

export const { height, width } = Dimensions.get('window');

export default class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.openOutletSelectModal = this.openOutletSelectModal.bind(this);
    this.goToPage1 = this.goToPage1.bind(this);
  }

  goToPage1() {
    
  }

  openOutletSelectModal() {
    this.setState({
      visible: true
    })
  }

  render() {

    return (

    <View>
      <SwiperFlatList>
        <View style={styles.slide0}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.goToPage1}>
            <Text> Hi there</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide1}>
          {/* <FlatList 
            data={[
              {key: '1'},
              {key: '2'}
            ]}
            renderListItem={this.renderListItem}></FlatList> */}
            <Text style={{fontSize: 50}}> Floor 1 </Text>
            <TouchableOpacity activeOpacity={.9} onPress={this.openOutletSelectModal}>

              <Image source={require('./assets/images/allred_map.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
            <Text style={{ fontSize: 50 }}> Floor 2 </Text>

            <TouchableOpacity activeOpacity={.9} onPress={this.openOutletSelectModal}>
              <Image source={require('./assets/images/onegreendot_map.png')} />
            </TouchableOpacity>
        </View>
      </SwiperFlatList>
      <View>
          <Modal.BottomModal
            visible={this.state.visible}
            swipeDirection={['down']} // can be string or an array
            swipeThreshold={100} // default 100
            height={.9}
            onSwipeOut={(event) => {
              this.setState({ visible: false });
            }}
          >
            <ModalContent style={styles.outletsUsed}>
              <Text style={styles.outletStatus}> Outlet Specs </Text>
              <Image source={require('./assets/images/outlets_used.png')} />
              <Text style={styles.communityReviews}> Community Reviews </Text>
              <Image source={require('./assets/images/reviews.png')}/>
            </ModalContent>
          </Modal.BottomModal>
          </View>
    </View>
    );
  }

  // handleCanvas = (canvas) => {
    // const context = canvas.getContext('2d');
    // // console.log(canvas);
    // const image = new Image(canvas, height, width);
    // image.src = 'https://imgur.com/epXTkXS';

    // console.log('we her e');
    // image.addEventListener('onload', () => {
    //   console.log('image is loaded');
    //   const asset = Expo.Asset.fromModule(require('./assets/images/babycorn.jpg'));
    //   image.src = asset.uri;
    //   context.drawImage(image, 100, 100, width, height);

    //   context.fillStyle = 'purple';
    //   context.fillRect(300, 300, 100, 100);
    //   console.log('we inside here');
    // }); 
    
    renderListItem = (item) => {
      return (
        <Text>{item.key}</Text>
      );
    };
      

    // const img = new Image();
    // img.src = 'https://imgur.com/epXTkXS';
    // img.onload = function() {
    //   ctx.drawImage(img, 500, 500);
    // }
    // ctx.drawImage(img, 0, 0);
}

/*<View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Swiper>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvas: {
    height, 
    width, 
    alignItems: 'center',
    flex: 1
  },
  slide0: {
    flex: 1,
    backgroundColor: '#FED919',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    width,
  },
  slide1: {
    flex: 1,
    backgroundColor: '#FED919',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    width,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height,
    backgroundColor: '#FED919',
    width
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FED919',
    height,
    width
  },
  outletsUsed: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outletStatus: {
    fontSize: 40,
    paddingBottom: 10
  },
  communityReviews: {
    fontSize: 30,
    marginTop: 50
  }
});
