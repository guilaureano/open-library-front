type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function BookSearch({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar livros..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        border-zinc-300
        bg-white
        px-4
        py-3
        text-sm
        outline-none
        transition
        focus:border-blue-500
      "
    />
  );
}
