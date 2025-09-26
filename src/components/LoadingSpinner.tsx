import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Platform } from 'react-native';

const LoadingSpinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ASENDUS</Text>
          <Text style={styles.logoSubText}>INNOVATIONS</Text>
        </View>
        <ActivityIndicator size="large" color="#0d6efd" style={styles.spinner} />
        <Text style={styles.loadingText}>Loading your experience...</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.subText}>Please wait while we prepare everything</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  spinnerContainer: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    minWidth: 300,
    maxWidth: 400,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0d6efd',
    letterSpacing: 2,
    textAlign: 'center',
    fontFamily: Platform.OS === 'web' ? '"Inter", "Segoe UI", system-ui, sans-serif' : undefined,
  },
  logoSubText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
    letterSpacing: 4,
    textAlign: 'center',
    marginTop: 2,
    fontFamily: Platform.OS === 'web' ? '"Inter", "Segoe UI", system-ui, sans-serif' : undefined,
  },
  spinner: {
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#0d6efd',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontFamily: Platform.OS === 'web' ? '"Inter", "Segoe UI", system-ui, sans-serif' : undefined,
  },
  progressBar: {
    width: 220,
    height: 6,
    backgroundColor: '#e9ecef',
    borderRadius: 3,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0d6efd',
    borderRadius: 3,
    width: '30%',
    ...(Platform.OS === 'web' && {
      animation: 'loading 2.5s ease-in-out infinite',
      background: 'linear-gradient(90deg, #0d6efd 0%, #6610f2 100%)',
    }),
  },
  subText: {
    marginTop: 12,
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    fontFamily: Platform.OS === 'web' ? '"Inter", "Segoe UI", system-ui, sans-serif' : undefined,
  },
});

export default LoadingSpinner;