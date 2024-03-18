import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PercentIcon from "@mui/icons-material/Percent";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import UpdateIcon from "@mui/icons-material/Update";
import { AdvantageCard } from "./advantage-card";

export const Advantages = () => {
  return (
    <div className="grid grid-cols-2 gap-6 justify-items-center">
      <AdvantageCard
        icon={<LocalShippingIcon style={{ fontSize: 50 }} />}
        label="Entrega grátis em Maputo para pedidos acima de 3000 MT"
      />
      <AdvantageCard
        icon={<PercentIcon style={{ fontSize: 50 }} />}
        label="Preços baixos garantidos"
      />
      <AdvantageCard
        icon={<UpdateIcon style={{ fontSize: 50 }} />}
        label="Disponível para si 24/7"
      />
      <AdvantageCard
        icon={<CheckCircleOutlineIcon style={{ fontSize: 50 }} />}
        label="Qualidade testada e comprovada."
      />
    </div>
  );
};
