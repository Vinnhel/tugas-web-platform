import Link from 'next/link';

interface RenderingCardProps {
  title: string;
  fullName: string;
  description: string;
  color: string; // Warna border (green/blue/purple)
  href: string;
  icon: string;
}

export default function RenderingCard({
  title,
  fullName,
  description,
  color,
  href,
  icon,
}: RenderingCardProps) {
  return (
    // Border & Background menyesuaikan mode
    <div className={`border-l-4 p-5 rounded-lg shadow-md ${color} 
      bg-white dark:bg-gray-800 
      dark:shadow-gray-900/50
      flex flex-col h-full transition-colors duration-300`}>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {fullName}
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 grow">
        {description}
      </p>
      
      <Link
        href={href}
        className="block w-full text-center bg-gray-900 dark:bg-gray-700 
          text-white py-2 rounded text-sm 
          hover:bg-gray-700 dark:hover:bg-gray-600 transition"
      >
        Demo →
      </Link>
    </div>
  );
}