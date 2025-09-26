import { StyleSheet, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const servicesStyles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: '#212529',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 600,
    ...(isWeb && { marginHorizontal: 'auto' as any }),
  },
  servicesGrid: {
    flexDirection: isWeb ? 'row' : 'column',
    flexWrap: 'wrap',
    gap: 24,
    maxWidth: 1200,
    ...(isWeb && { marginHorizontal: 'auto' as any }),
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    flex: isWeb ? 1 : undefined,
    minWidth: isWeb ? 300 : undefined,
    borderWidth: 1,
    borderColor: '#f1f3f4',
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  iconText: {
    fontSize: 24,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    flex: 1,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
  },
});