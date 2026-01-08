import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PerspectiveCard({
  image,
  alt,
  title,
  type,
  description
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative w-full bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={alt || title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {type && (
            <span className="px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase bg-[#4B1F6F] rounded-full">
              {type}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        <div className="mt-6 flex items-center text-sm font-bold text-gray-900 group-hover:gap-3 transition-all">
          View Case Study
          <span className="ml-2 transition-transform group-hover:translate-x-1 text-[#4B1F6F">→</span>
        </div>
      </div>
    </motion.div>
  );
}
