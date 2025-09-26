import React from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { footerStyles } from '../styles/footerStyles';

const Footer: React.FC = () => {
  const handlePhonePress = async () => {
    const phoneNumber = 'tel:+919100083138';
    try {
      const supported = await Linking.canOpenURL(phoneNumber);
      if (supported) {
        await Linking.openURL(phoneNumber);
      } else {
        Alert.alert('Error', 'Phone app is not available on this device');
      }
    } catch (error) {
      console.log('Phone link error:', error);
      Alert.alert('Error', 'Unable to open phone app');
    }
  };

  const handleEmailPress = async () => {
    const emailUrl = 'mailto:sandilya@asendusinnovations.com';
    try {
      const supported = await Linking.canOpenURL(emailUrl);
      if (supported) {
        await Linking.openURL(emailUrl);
      } else {
        Alert.alert('Error', 'Email app is not available on this device');
      }
    } catch (error) {
      console.log('Email link error:', error);
      Alert.alert('Error', 'Unable to open email app');
    }
  };

  return (
    <View style={footerStyles.footer}>
      {/* Contact Information Section */}
      <View style={footerStyles.contactSection}>
        <View style={footerStyles.contactRow}>
          <Text style={footerStyles.contactTitle}>Reach Us At : </Text>
          
          <View style={footerStyles.contactItem}>
            <Text style={footerStyles.contactIcon}>👤</Text>
            <Text style={footerStyles.contactText}>Sandilya Garimella</Text>
          </View>
          
          <Text style={footerStyles.contactSeparator}>, </Text>
          
          <TouchableOpacity style={footerStyles.contactItem} onPress={handlePhonePress}>
            <Text style={footerStyles.contactIcon}>📞</Text>
            <Text style={[footerStyles.contactText, footerStyles.clickableText]}>+91-9100083138</Text>
          </TouchableOpacity>
          
          <Text style={footerStyles.contactSeparator}>, </Text>
          
          <TouchableOpacity style={footerStyles.contactItem} onPress={handleEmailPress}>
            <Text style={footerStyles.contactIcon}>📧</Text>
            <Text style={[footerStyles.contactEmail, footerStyles.clickableText]}>sandilya@asendusinnovations.com</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
      {/* Copyright Section */}
      <View style={footerStyles.copyrightSection}>
        <Text style={footerStyles.footerText}>
          © {new Date().getFullYear()} Asendus Innovations — All rights reserved
        </Text>
      </View>
    </View>
  );
};

export default Footer;