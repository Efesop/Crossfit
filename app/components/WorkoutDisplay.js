function WorkoutDisplay({ workout }) {
  if (!workout) {
    return <div>Please generate a workout.</div>;
  }

  return (
    <div className="p-4 border rounded">
      <img src={workout.image} alt={workout.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{workout.title}</h2>
      <p className="mb-4">{workout.description}</p>
      <a href={workout.video} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Watch Video</a>
    </div>
  );
}

export default WorkoutDisplay;
