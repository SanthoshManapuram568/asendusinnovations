import React from 'react';
import { View, Text } from 'react-native';
import { servicesStyles } from '../styles/servicesStyles';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }: ServiceCardProps) => (
  <View style={servicesStyles.serviceCard}>
    <View style={servicesStyles.serviceHeader}>
      <View style={servicesStyles.featureIcon}>
        <Text style={servicesStyles.iconText}>{icon}</Text>
      </View>
      <Text style={servicesStyles.serviceTitle}>{title}</Text>
    </View>
    <Text style={servicesStyles.serviceDescription}>{description}</Text>
  </View>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Product Engineering',
      description: 'Build resilient, maintainable backend systems and delightful frontends with modern frameworks.',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Kubernetes, CI/CD, infra as code, and cost-optimised cloud architectures.',
    },
    {
      icon: '🧠',
      title: 'Data & AI',
      description: 'Analytics pipelines, ML models, realtime streaming and visualisation dashboards.',
    },
  ];

  return (
    <View style={servicesStyles.section}>
      <Text style={servicesStyles.sectionTitle}>Services</Text>
      <Text style={servicesStyles.sectionSubtitle}>
        Full-stack product engineering, Cloud & DevOps, Data & AI, Design systems
      </Text>
      <View style={servicesStyles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </View>
    </View>
  );
};

export default ServicesSection;