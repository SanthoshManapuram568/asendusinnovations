import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { contactStyles } from '../styles/contactStyles';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91', // Default to India
    phoneNumber: '',
    message: '',
  });
  
  const [captcha, setCaptcha] = useState({ question: '', answer: 0 });
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Auto-hide error message after 3 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  
  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  
  // Generate random math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    let question;
    
    switch (operation) {
      case '+':
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        // Ensure positive result
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        answer = larger - smaller;
        question = `${larger} - ${smaller}`;
        break;
      case '*':
        answer = num1 * num2;
        question = `${num1} × ${num2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }
    
    setCaptcha({ question, answer });
    setUserCaptchaAnswer('');
  };
  
  // Initialize captcha on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);
  




  const handleSubmit = () => {
    console.log('🚀 SUBMIT BUTTON CLICKED!'); // Debug log
    
    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');
    
    const { firstName, lastName, email, phoneNumber, message } = formData;
    
    // Trim whitespace from all fields
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhoneNumber = phoneNumber.trim();
    const trimmedMessage = message.trim();
    const trimmedCaptchaAnswer = userCaptchaAnswer.trim();
    
    console.log('Form data:', { trimmedFirstName, trimmedLastName, trimmedEmail, trimmedPhoneNumber, trimmedMessage }); // Debug log
    
    if (!trimmedFirstName || trimmedFirstName.length < 2) {
      setErrorMessage('Please enter a valid first name (at least 2 characters)');
      return;
    }
    
    if (!trimmedLastName || trimmedLastName.length < 2) {
      setErrorMessage('Please enter a valid last name (at least 2 characters)');
      return;
    }
    
    if (!trimmedEmail) {
      setErrorMessage('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    if (!trimmedPhoneNumber) {
      setErrorMessage('Please enter your phone number');
      return;
    }
    
    if (trimmedPhoneNumber.length < 10) {
      setErrorMessage('Please enter a valid phone number (at least 10 digits)');
      return;
    }
    
    if (!trimmedMessage) {
      setErrorMessage('Please enter your message');
      return;
    }
    
    if (trimmedMessage.length < 10) {
      setErrorMessage('Message must be at least 10 characters');
      return;
    }
    
    if (!trimmedCaptchaAnswer) {
      setErrorMessage('Please solve the captcha');
      return;
    }
    
    // Captcha validation
    if (parseInt(trimmedCaptchaAnswer) !== captcha.answer) {
      setErrorMessage('Please solve the captcha correctly');
      generateCaptcha(); // Generate new captcha on wrong answer
      return;
    }

    console.log('Form validation passed, showing success message'); // Debug log
    setSuccessMessage('Thank you, your message has been sent!');
    setFormData({ firstName: '', lastName: '', email: '', countryCode: '+91', phoneNumber: '', message: '' });
    setUserCaptchaAnswer('');
    generateCaptcha(); // Generate new captcha after successful submission
  };

  return (
    <View style={contactStyles.contactSection}>
      <Text style={contactStyles.contactTitle}>Contact</Text>
      <Text style={contactStyles.contactSubtitle}>
        Tell us about your project — we'll reply within 1 business day.
      </Text>
      
      <View style={contactStyles.form}>
        <View style={contactStyles.nameRow}>
          <View style={[contactStyles.formGroup, contactStyles.halfWidth]}>
            <Text style={contactStyles.label}>First Name</Text>
            <TextInput
              style={contactStyles.input}
              value={formData.firstName}
              onChangeText={(text: string) => setFormData({ ...formData, firstName: text })}
              placeholder="First name"
            />
          </View>
          
          <View style={[contactStyles.formGroup, contactStyles.halfWidth]}>
            <Text style={contactStyles.label}>Last Name</Text>
            <TextInput
              style={contactStyles.input}
              value={formData.lastName}
              onChangeText={(text: string) => setFormData({ ...formData, lastName: text })}
              placeholder="Last name"
            />
          </View>
        </View>
        
        <View style={contactStyles.formGroup}>
          <Text style={contactStyles.label}>Email</Text>
          <TextInput
            style={contactStyles.input}
            value={formData.email}
            onChangeText={(text: string) => setFormData({ ...formData, email: text })}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={contactStyles.formGroup}>
          <Text style={contactStyles.label}>Phone Number</Text>
          <View style={contactStyles.phoneRow}>
            <TextInput
              style={contactStyles.countryCodeInput}
              value={formData.countryCode}
              onChangeText={(text: string) => setFormData({ ...formData, countryCode: text })}
              placeholder="+91"
              keyboardType="phone-pad"
              maxLength={4}
            />
            
            <TextInput
              style={[contactStyles.input, contactStyles.phoneInput]}
              value={formData.phoneNumber}
              onChangeText={(text: string) => setFormData({ ...formData, phoneNumber: text })}
              placeholder="Phone number"
              keyboardType="phone-pad"
              maxLength={15}
            />
          </View>
        </View>
        
        <View style={contactStyles.formGroup}>
          <Text style={contactStyles.label}>Message</Text>
          <TextInput
            style={[contactStyles.input, contactStyles.textArea]}
            value={formData.message}
            onChangeText={(text: string) => setFormData({ ...formData, message: text })}
            placeholder="Tell us about your requirement"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
        
        {/* Captcha Section */}
        <View style={contactStyles.formGroup}>
          <Text style={contactStyles.label}>Security Verification</Text>
          <View style={contactStyles.captchaContainer}>
            <View style={contactStyles.captchaQuestion}>
              <Text style={contactStyles.captchaQuestionText}>What is {captcha.question} ?</Text>
              <TouchableOpacity style={contactStyles.refreshCaptcha} onPress={generateCaptcha}>
                <Text style={contactStyles.refreshCaptchaText}>🔄</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={contactStyles.captchaInput}
              value={userCaptchaAnswer}
              onChangeText={setUserCaptchaAnswer}
              placeholder="Enter answer"
              keyboardType="numeric"
              maxLength={3}
            />
          </View>
        </View>
        
        {/* Error Message Display */}
        {errorMessage ? (
          <View style={contactStyles.errorContainer}>
            <Text style={contactStyles.errorText}>❌ {errorMessage}</Text>
          </View>
        ) : null}
        
        {/* Success Message Display */}
        {successMessage ? (
          <View style={contactStyles.successContainer}>
            <Text style={contactStyles.successText}>✅ {successMessage}</Text>
          </View>
        ) : null}
        
        <TouchableOpacity style={contactStyles.submitButton} onPress={handleSubmit}>
          <Text style={contactStyles.submitButtonText}>Send message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactSection;