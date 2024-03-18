import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterForm = () => {
  return (
    <form>
      <Input
        type="email"
        placeholder="Digite o seu email aqui..."
        className="placeholder:text-slate-200 text-white focus-visible:ring-primary-foreground"
      />
      <Button
        type="submit"
        className="bg-cyan-950 text-primary-foreground w-full mt-2"
      >
        Subscrever-se
      </Button>
    </form>
  );
};
