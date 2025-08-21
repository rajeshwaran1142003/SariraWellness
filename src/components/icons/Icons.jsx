// Lucide React Icons
export {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Brain,
  Sprout,
  HeartPulse,
  Baby,
  ShieldCheck,
  Sparkles,
  Utensils,
  Sandwich,
  Soup,
  Home,
  Store,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Truck,
  RefreshCw,
  Lock,
  Star,
  MessageSquare,
  Send,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Plus,
  Minus
} from 'lucide-react';

// Custom WhatsApp Icon
export const WhatsappIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.446.1-.149.05-.271-.023-.42-.073-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

// Custom YouTube Icon
export const YoutubeIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 4.24 4.24 2.5 7 2.5h10c2.76 0 4.5 1.74 4.5 4.5v10c0 2.76-1.74 4.5-4.5 4.5H7c-2.76 0-4.5-1.74-4.5-4.5z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

// SARIRA Logo Component
export const SariraLogo = ({ className, isFooter = false, width = 120, height = 45, ...props }) => (
  <div className={cn("relative", className)} {...props}>
    <img
      src="https://storage.googleapis.com/stedi-dev-images/sarira_logo_black.png"
      alt="SARIRA Logo"
      width={width}
      height={height}
      className={cn("w-auto h-full", { 'brightness-[10] invert': isFooter })}
    />
  </div>
);