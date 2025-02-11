import { useState } from "react";

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">체중 기록</h1>
      <WeightForm />
    </div>
  );
}

function WeightForm() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("이름:", name, "몸무게:", weight);
    setName("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64">
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="몸무게"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        기록
      </button>
    </form>
  );
}

export default App;
