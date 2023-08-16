import { useState } from 'react';
import ExerciseCheckbox from '../app/components/ExerciseCheckbox';
import WorkoutDisplay from '../app/components/WorkoutDisplay';
import Menu from '../app/components/Menu';

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [days, setDays] = useState(3);
  const [intensity, setIntensity] = useState('medium');
  const [progressive, setProgressive] = useState(false);
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
        days: days,
        intensity: intensity,
        progressive: progressive
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
          <div className="my-2">
            <label className="block text-sm font-bold mb-2">
              Days a week:
              <input type="number" value={days} onChange={(e) => setDays(e.target.value)} min="1" max="7" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </label>
          </div>
          <div className="my-2">
            <label className="block text-sm font-bold mb-2">
              Intensity:
              <select value={intensity} onChange={(e) => setIntensity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
          </div>
          <div className="my-2">
            <label className="block text-sm font-bold mb-2">
              Progressive Workouts:
              <input type="checkbox" checked={progressive} onChange={(e) => setProgressive(e.target.checked)} className="ml-2" />
            </label>
          </div>
          <button onClick={generateWorkout} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Generate Workout</button>
        </div>
        <div>
          <WorkoutDisplay workout={currentWorkout} />
        </div>
      </div>
    </div>
  );
}
