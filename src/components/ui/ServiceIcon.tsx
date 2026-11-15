import React from 'react';
import { ServiceIconType } from '../../data/services';

export type IconName =
  | ServiceIconType
  | 'whatsapp'
  | 'check'
  | 'location'
  | 'clock'
  | 'camera'
  | 'shield'
  | 'arrow-right'
  | 'info'
  | 'wallet'
  | 'calendar'
  | 'user'
  | 'layers';

interface ServiceIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  size = 24,
  className,
}) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  };

  switch (name) {
    case 'whatsapp':
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.008c0 1.766.461 3.49 1.337 5.012L2 22l5.122-1.343a9.967 9.967 0 0 0 4.909 1.292h.004c5.522 0 10.007-4.485 10.007-10.008 0-2.674-1.041-5.188-2.931-7.079A9.946 9.946 0 0 0 12.031 2zm5.852 14.29c-.246.694-1.434 1.326-2.006 1.411-.532.079-1.226.113-1.979-.126-.456-.145-1.042-.339-1.792-.663-3.154-1.362-5.214-4.537-5.371-4.747-.158-.21-1.284-1.709-1.284-3.26 0-1.551.812-2.313 1.101-2.629.289-.315.63-.394.84-.394.21 0 .42.003.604.011.194.009.453-.074.709.541.263.631.893 2.182.971 2.34.079.158.131.342.026.552-.105.21-.158.342-.315.526-.158.184-.332.411-.473.552-.158.158-.322.329-.138.645.184.315.818 1.349 1.756 2.185 1.206 1.075 2.223 1.409 2.538 1.567.315.158.5.131.684-.079.184-.21.788-.92 1-1.236.21-.315.42-.263.709-.158.289.105 1.839.868 2.154 1.025.315.158.525.237.604.368.079.132.079.763-.168 1.456z" />
        </svg>
      );
    case 'masonry':
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="6" rx="1" />
          <rect x="3" y="14" width="8" height="6" rx="1" />
          <rect x="15" y="14" width="6" height="6" rx="1" />
          <line x1="12" y1="4" x2="12" y2="10" />
        </svg>
      );
    case 'painting':
      return (
        <svg {...commonProps}>
          <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
          <path d="M12 11v4a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case 'electrical':
      return (
        <svg {...commonProps}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'plumbing':
      return (
        <svg {...commonProps}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'flooring':
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      );
    case 'roofing':
      return (
        <svg {...commonProps}>
          <path d="m3 12 9-9 9 9" />
          <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
        </svg>
      );
    case 'finishing':
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'residential':
      return (
        <svg {...commonProps}>
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      );
    case 'commercial':
      return (
        <svg {...commonProps}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg {...commonProps}>
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
          <path d="M17.64 15 22 10.64" />
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
        </svg>
      );
    case 'check':
      return (
        <svg {...commonProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'location':
      return (
        <svg {...commonProps}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...commonProps}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...commonProps}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'info':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
    case 'wallet':
      return (
        <svg {...commonProps}>
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'user':
      return (
        <svg {...commonProps}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...commonProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
};
