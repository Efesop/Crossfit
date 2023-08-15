function ExerciseCheckbox({ exercise, onToggle }) {
  return (
    <div className="mb-4">
      <input
        type="checkbox"
        id={exercise}
        name={exercise}
        onChange={() => onToggle(exercise)}
      />
      <label htmlFor={exercise} className="ml-2">{exercise}</label>
    </div>
  );
}

export default ExerciseCheckbox;
