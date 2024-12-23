import { handleEscKeyDown } from "@/utils/handleKeyDown";
import { LabelInputProps } from "../../types/type";

const LabelInput = ({
  label,
  type = "text",
  placeholder = `${label} 입력하세요.`,
  name,
  value,
  onChange,
  onEscKeyDown,
  read = false,
}: LabelInputProps) => (
  <div className="flex items-center py-2">
    {label && (
      <label
        className="block min-w-24 shrink-0 text-sm font-medium"
        htmlFor={name}
      >
        {label}
      </label>
    )}
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => handleEscKeyDown(e, onEscKeyDown, name)}
      readOnly={read}
      className="w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
    />
  </div>
);

export default LabelInput;
