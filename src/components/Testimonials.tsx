import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  uf?: 'DF' | 'GO';
}

const testimonialsData = {
  DF: [
    {
      name: "Ricardo Menezes",
      role: "Síndico Profissional - Lago Sul",
      content: "A qualidade técnica da Cnsousatec é impressionante. Em Brasília, onde as normas são rigorosas, eles entregam um serviço impecável e com total segurança.",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      role: "Proprietária de Comércio - Sudoeste",
      content: "Precisávamos de uma manutenção eletrônica sofisticada e eles foram os únicos que resolveram com precisão. Excelência em cada detalhe.",
      rating: 5
    }
  ],
  GO: [
    {
      name: "João Batista",
      role: "Comerciante - Águas Lindas",
      content: "O melhor preço da região com um serviço muito rápido. Resolveram meu problema elétrico no mesmo dia e com um valor super justo.",
      rating: 5
    },
    {
      name: "Maria Eduarda",
      role: "Residente - Jardim Brasília",
      content: "Excelente custo-benefício! Agilidade no atendimento e preço que cabe no bolso. Recomendo para quem busca economia sem perder a qualidade.",
      rating: 5
    }
  ]
};

export default function Testimonials({ uf = 'DF' }: TestimonialProps) {
  const currentTestimonials = testimonialsData[uf];
  const emphasisText = uf === 'DF' 
    ? "Excelência e Qualidade Técnica Superior" 
    : "Agilidade e o Melhor Custo-Benefício da Região";

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            O que nossos clientes dizem
          </h2>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
            {emphasisText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-blue-100 dark:text-gray-800" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div>
                <p className="font-bold text-gray-900 dark:text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
