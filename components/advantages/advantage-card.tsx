interface AdvantageCardProps {
  icon: React.ReactNode;
  label: string;
}

export const AdvantageCard = ({ icon, label }: AdvantageCardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <figure className="text-primary">{icon}</figure>
      <h3 className="text-sm font-semibold text-slate-800 text-center">
        {label}
      </h3>
    </div>
  );
};
