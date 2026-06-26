const reviews = [
  {
    author: "Valentina M.",
    rating: 5,
    text: "El mejor brunch de Belgrano sin dudas. Los avocados toasts son increíbles y el café es de otro nivel. Ambiente súper agradable, volvería mil veces.",
    date: "hace 2 semanas",
  },
  {
    author: "Martín G.",
    rating: 5,
    text: "Fui por primera vez y quedé enamorado. La pastelería artesanal es una locura, probé el roll de canela y la torta de queso. El latte art es impecable. Lugar muy cuidado.",
    date: "hace 1 mes",
  },
  {
    author: "Carolina R.",
    rating: 5,
    text: "Uno de esos cafés que encontrás de casualidad y se convierten en tu lugar favorito. El brunch es abundante y rico de verdad. Pet friendly, wifi, y la atención es muy buena.",
    date: "hace 3 semanas",
  },
];

const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJqbjYGC-3vJWoliVeN5k0XA";

export default function Reviews() {
  return (
    <section id="resenas" className="py-24 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-primary text-center mb-4 reveal">
          Reseñas
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-dark mb-4 reveal">
          Lo que dicen nuestros clientes
        </h2>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-3 mb-14 reveal">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${star <= 4 ? "text-yellow-400" : "text-yellow-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-serif text-2xl text-dark">4.5</span>
          <span className="font-sans text-sm text-gray-500">462 reseñas en Google</span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 reveal-stagger">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex justify-between items-center">
                <p className="font-sans text-sm font-medium text-dark">{review.author}</p>
                <p className="font-sans text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-primary-dark transition-colors border border-primary hover:border-primary-dark px-6 py-3 rounded-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Dejá tu reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
}
