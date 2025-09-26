import { StyleSheet, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const footerStyles = StyleSheet.create({
  footer: {
    backgroundColor: '#071233',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  // Contact Information Section
  contactSection: {
    alignItems: 'center',
    marginBottom: 30,
    maxWidth: isWeb ? 800 : '100%',
    paddingHorizontal: 15,
  },
  contactRow: {
    flexDirection: isWeb ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  contactTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: isWeb ? 8 : 0,
    marginBottom: isWeb ? 0 : 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: isWeb ? 2 : 0,
    marginVertical: isWeb ? 0 : 4,
  },
  contactIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  contactText: {
    color: '#cfe2ff',
    fontSize: 16,
    fontWeight: '500',
  },
  contactSeparator: {
    color: '#cfe2ff',
    fontSize: 16,
    marginHorizontal: 4,
    ...(isWeb ? {} : { display: 'none' as any }),
  },
  contactEmail: {
    color: '#0d6efd',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  companyName: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
  },
  // Clickable text style
  clickableText: {
    textDecorationLine: 'underline',
    opacity: 0.9,
  },
  // Copyright Section
  copyrightSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(207, 226, 255, 0.2)',
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#cfe2ff',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
  },
});