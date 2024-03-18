import { NewsletterForm } from "./newsletter-form";

export const Newsletter = () => {
  return (
    <div>
      <p className="text-white text-center mb-7 mt-10">
        Inscreva-se para receber actualizações sobre novidades e ofertas
        especiais
      </p>
      <NewsletterForm />
    </div>
  );
};
