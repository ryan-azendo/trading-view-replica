import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Control height + padding + font size. Renamed to avoid the native
   *  numeric `size` attribute. */
  inputSize?: InputSize;
  /** Error state — paints the border with --input-border-error. */
  error?: boolean;
  /** Icon rendered inside the field, before the input (e.g. Search). */
  leadingIcon?: ReactNode;
  /** Icon/affordance rendered inside the field, after the input. */
  trailingIcon?: ReactNode;
}

/**
 * Input — foundational atom. A bordered text field with optional in-field
 * icons and an error state. Label/help text are intentionally left to a
 * higher-level FormField molecule. Token-driven, themes automatically.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    inputSize = "md",
    error = false,
    leadingIcon,
    trailingIcon,
    className,
    ...rest
  },
  ref,
) {
  const wrapperClasses = [
    styles.wrapper,
    styles[inputSize],
    error && styles.error,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {leadingIcon && (
        <span className={styles.icon} aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      <input
        ref={ref}
        className={styles.input}
        aria-invalid={error || undefined}
        {...rest}
      />
      {trailingIcon && (
        <span className={styles.icon} aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </div>
  );
});
