import { useFormContext } from "react-hook-form";
import { cn } from "../../helpers/common";

function Input({ name = "", placeholder = "", type = "text", className = "" }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={cn(
          "block w-full bg-transparent border border-gray-600 py-2 rounded-md outline-none px-2 text-gray-300 placeholder:text-gray-300",
          className
        )}
      />
      {errors[name] && (
        <p className="text-red-600 text-xs">{errors[name]?.message}</p>
      )}
    </div>
  );
}

export default Input;
