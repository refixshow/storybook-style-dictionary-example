import styles from "./InputWithHint.module.scss";

type TInputVariant = "default" | "disabled" | "error";

export interface IProps {
  id: string;
  name: string;
  onChange?: () => void;
  checked?: boolean;
  value: any;
  label: string;
  hint: string;
  variant: TInputVariant;
}

const InputWithHint = ({
  id,
  name,
  value,
  label,
  hint,
  checked = false,
  onChange = () => {},
  variant = "default",
}: IProps) => {
  return (
    <div className={styles[`wrapper-${variant}`]}>
      <label className={styles.label} htmlFor={id}>
        <input
          id={id}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          className={styles.checkbox}
          disabled={variant === "disabled"}
        />
        <span className={styles.span}>{label}</span>
      </label>
      <p className={styles.hint}>{hint}</p>
    </div>
  );
};

export default InputWithHint;
