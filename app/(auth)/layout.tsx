import { Header } from "@/components/header";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center py-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
