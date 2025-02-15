import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList
} from "recharts";

function WeightPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [weights, setWeights] = useState([]); // 몸무게 기록 저장

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !weight) return;

    // 새로운 몸무게 기록 추가
    const newWeight = { name, date, weight: parseFloat(weight) };
    setWeights((prev) => [...prev, newWeight]);

    console.log("기록:", newWeight);
    setName("");
    setDate("");
    setWeight("");
  };

  // 날짜순으로 정렬 후 몸무게 변화량 계산
  const sortedWeights = [...weights].sort((a, b) => new Date(a.date) - new Date(b.date));
  const graphData = sortedWeights.map((entry) => ({
    date: entry.date,
    weight: entry.weight, // 그래프에 몸무게 표시
  }));

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">체중 기록 페이지</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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

      {/* 그래프 표시 */}
      <div className="w-full max-w-xl mt-6">
        <h2 className="text-xl font-semibold mb-2">체중 변화 그래프</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={graphData}>
            <XAxis dataKey="date" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }}>
              {/* 점 위에 몸무게 표시 */}
              <LabelList dataKey="weight" position="top" />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeightPage;
