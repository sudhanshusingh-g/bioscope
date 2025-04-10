import React,{ useId } from "react";

const Input = React.forwardRef(
  (
    { label, type = "text", required = false, className = "",error, ...props },
    ref
  ) => {
    const id = useId();
    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <label className="font-semibold" htmlFor={id}>
            {label}{" "}
            {required && (
              <span aria-label="required" className="text-xs text-rose-500">
                *
              </span>
            )}
          </label>
        )}
        <input
          type={type}
          className={`w-full p-2 border border-gray-300 rounded focus:bg-blue-100/40 focus:border-blue-400 outline-none ${
            error ? "border-rose-400" : ""
          } ${className}`}
          ref={ref}
          id={id}
          {...props}
        />
        <span className="text-sm text-rose-400">{error}</span>
      </div>
    );
  }
);

export default Input;
