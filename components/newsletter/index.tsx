import { NewsletterForm } from "./newsletter-form";

export const Newsletter = () => {
  return (
    <div>
      <p className="text-white text-center mb-7 mt-10 lg:text-lg">
        Inscreva-se para receber actualizações sobre novidades e ofertas
        especiais
      </p>
      <div className="lg:w-1/2 lg:mx-auto">
        <NewsletterForm />
      </div>
    </div>
  );
};
