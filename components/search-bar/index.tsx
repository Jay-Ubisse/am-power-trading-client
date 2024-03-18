import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <div className="flex w-full max-w-sm items-center shadow-md bg-transparent">
      <Input
        type="search"
        placeholder="Procurar..."
        className="bg-primary-foreground !rounded-tr-none !rounded-br-none focus-visible:ring-0"
      />
      <Button type="submit" className="!rounded-tl-none !rounded-bl-none">
        <SearchIcon />
      </Button>
    </div>
  );
};
