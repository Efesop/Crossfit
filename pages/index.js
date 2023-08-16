import { useState } from 'react';
import ExerciseCheckbox from '../app/components/ExerciseCheckbox';
import WorkoutDisplay from '../app/components/WorkoutDisplay';
import Menu from '../app/components/Menu';

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState(null);

  const handleExerciseToggle = (exercise) => {
    if (exercises.includes(exercise)) {
      setExercises(prevExercises => prevExercises.filter(e => e !== exercise));
    } else {
      setExercises(prevExercises => [...prevExercises, exercise]);
    }
  };

  const generateWorkout = async () => {
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        exercises: exercises,
        // Add other parameters like days, intensity, etc.
      })
    });

    const data = await response.json();
    setCurrentWorkout(data.workout);
  };

  return (
    <div className="container mx-auto p-4">
      <Menu />
      <h1 className="text-2xl font-bold mb-4">CrossFit Workout Generator</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ExerciseCheckbox exercise="Push-ups" onToggle={handleExerciseToggle} />
          <ExerciseCheckbox exercise="Squats" onToggle={handleExerciseToggle} />
          <ExerciseCheckbox exercise="Pull-ups" onToggle={handleExerciseToggle} />
          {/* ... (Other UI elements for selecting days, intensity, etc.) */}
          <button onClick={generateWorkout} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Generate Workout</button>
        </div>
        <div>
          <WorkoutDisplay workout={currentWorkout} />
        </div>
      </div>
    </div>
  );
}
