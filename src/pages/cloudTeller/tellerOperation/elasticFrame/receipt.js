import React, { Component } from 'react';
import { StyleSheet, View, Text, PixelRatio, Image, ScrollView } from 'react-native';
import LinearGradient from "react-native-linear-gradient"
const px2rn = px => PixelRatio.roundToNearestPixel(px);
const rem2rn = rem => px2rn(rem * 16);

import { OPEN , chapter } from './imageSource/imageSource';
import Close from './close'

import '@/window'
const NetworkUtil = require('$/util/networkutil');
const router = require('$/router-control');

const tokenutil = require('$/util/tokenutil');


module.exports = class ReportLoss extends Component<{}> {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    
    
  }

  render() {
    let index =2;
    return (
      <Close callBackHome = {()=> {this.props.closeHome()}} >
        <View style={{flexDirection:"row",marginTop:32,marginLeft:24,marginBottom:20,alignItems:"center"}}>
          <Text style={styles.Stance}></Text>
          <Text style={styles.title}>银行卡挂失电子回单</Text>
        </View>
        <ScrollView>

          <View style={styles.loanItem}>
            <Text> 客户姓名 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>李明月</Text>
                {/* <Image source={OPEN}></Image> */}
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 证件类型 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>身份证</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 证件号码 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>2306231970232025850</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 卡号 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>6230********1973</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 卡类型 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>一卡通</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 开户网点 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>赞同科技</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 交易名称 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>银行卡挂失</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 交易日期 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>2019-08-27</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 交易时间 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>14：00</Text>
              </View>
          </View>
          <View style={styles.loanItem}>
            <Text> 交易流水号 </Text>
              <View style={styles.loanItemRight}>
                <Text style={[ styles.useLoan, styles.loanItemRightText]}>ADFE3231434525332A</Text>
              </View>
          </View>
          <Image style={{width:200,height:200,position:'absolute',bottom:10,right:10,transform: [{skewY:'-12.7deg'}]}}  resizeMode='contain' source={chapter}></Image>
        </ScrollView>
        <LinearGradient style={styles.ensure} colors={['#E9962F', '#FFC67E']}  >
            <Text style={{color:'#fff',fontSize:17,textAlign:"center",height:45,lineHeight:45}} onPress={() => {
                    this.props.closeHome()
                }}>关闭</Text>
        </LinearGradient>
      </Close>
    );
  }
  
};

const styles = StyleSheet.create({
  Stance:{
    width:4,
    height:16,
    backgroundColor:'#E39634',
    marginRight:8
  },
  title:{
    color:'#000',
    fontSize:17,
    fontWeight:"bold"
  },
  loanItemRightText: {
    textAlign: 'right'
  },
  loanItemRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 100,
    height: 35,
  },
  loanItem: {
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1
  },
  ensure:{
    width:'90%',
    height:45,
    marginLeft:'5%',
    borderRadius:5,
    backgroundColor:'#E39634',
    marginTop:10,
    // position:'absolute',
    // bottom:120,
    // left:'5%'                        
  }
});