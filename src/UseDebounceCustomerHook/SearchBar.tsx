import { TextField } from "@mui/material";

interface SearchBarProps {
  onChange: (value: string) => void;
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
  const handleChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      id="fullWidth"
      label="Search users"
      size="large"
      onChange={handleChange}
    />
  );
};
