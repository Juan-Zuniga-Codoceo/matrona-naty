// src/data/testimonials.ts
import { type FC } from 'react';
import {
  ConsultaGeneralIcon,
  PlanificacionFamiliarIcon,
  AtencionGinecologicaIcon,
  AtencionObstetricaIcon,
  AtencionPostpartoIcon
} from './serviceIcons';

export type ServiceType = 
  | "Consulta General"
  | "Planificación Familiar"
  | "Atención Ginecológica"
  | "Atención Obstétrica"
  | "Atención Postparto";

export interface Testimonial {
  id: string;
  name: string;
  service: ServiceType;
  rating: number;
  comment: string;
  date: string;
  location?: string;
}

type ServiceIconType = {
  [K in ServiceType]: FC;
};

export const serviceIcons: ServiceIconType = {
  "Consulta General": ConsultaGeneralIcon,
  "Planificación Familiar": PlanificacionFamiliarIcon,
  "Atención Ginecológica": AtencionGinecologicaIcon,
  "Atención Obstétrica": AtencionObstetricaIcon,
  "Atención Postparto": AtencionPostpartoIcon,
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Mendez',
    service: 'Atención Obstétrica',
    rating: 5,
    comment: 'Mi experiencia con la Matrona Naty fue excepcional. Su acompañamiento durante todo mi embarazo me dio mucha seguridad y tranquilidad. Siempre disponible para resolver dudas.',
    date: '2024-12-15',
    location: 'Valparaíso'
  },
  {
    id: '2',
    name: 'María José Torres',
    service: 'Atención Postparto',
    rating: 5,
    comment: 'Excelente profesional. Me ayudó muchísimo en el periodo de lactancia y postparto. Sus consejos fueron fundamentales para mi recuperación.',
    date: '2024-12-10',
    location: 'Viña del Mar'
  },
  {
    id: '3',
    name: 'Andrea Ramírez',
    service: 'Planificación Familiar',
    rating: 5,
    comment: 'Muy profesional y cercana. Me explicó todas las opciones disponibles y me ayudó a tomar la mejor decisión para mi caso.',
    date: '2024-11-28',
    location: 'Quilpué'
  },
  {
    id: '4',
    name: 'Valentina Soto',
    service: 'Atención Ginecológica',
    rating: 5,
    comment: 'Excelente atención, muy dedicada y profesional. Me sentí muy cómoda durante toda la consulta.',
    date: '2025-01-02',
    location: 'Valparaíso'
  },
  {
    id: '5',
    name: 'Paula Jiménez',
    service: 'Consulta General',
    rating: 5,
    comment: 'La mejor matrona que he tenido. Muy clara en sus explicaciones y siempre dispuesta a resolver dudas.',
    date: '2025-01-02',
    location: 'Viña del Mar'
  }
];