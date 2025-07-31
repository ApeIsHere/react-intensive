import styles from "./PostLenthFilter.module.css";

type PostLengthFilterProps = {
  value: number;
  onLengthChange: (length: number) => void;
};

function PostLengthFilter({ value, onLengthChange }: PostLengthFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLengthChange(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="title_length" className={styles.label}>
        Title Length: <strong>{value}</strong>
      </label>
      <input
        type="range"
        id="title_length"
        min="0"
        max="30"
        step="1"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default PostLengthFilter;
