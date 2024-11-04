import React, { useState } from 'react';

function LBRTForm() {
  const [data, setData] = useState({
    participantID: '',
    birthDate: '',
    height1: 160,
    height2: 160,
    sittingHeight1: 90,
    sittingHeight2: 90,
    weight: 60,
    dominantHandTime: 35,
    dominantHandHits: 10,
    dominantHandID: '',
    nonDominantHandTime: 35,
    nonDominantHandHits: 10,
    nonDominantHandID: '',
    bothHandsTime: 35,
    bothHandsHits: 10,
    bothHandsID: '',
    notes: '',
    armSpan: 150,
  });

  const [message, setMessage] = useState(null); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRangeChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://lbrt-backend.onrender.com/api/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            setMessage({ type: 'success', text: result.message });
        } else {
            setMessage({ type: 'error', text: result.message || 'Błąd zapisu danych' });
        }
    } catch (error) {
        setMessage({ type: 'error', text: 'Błąd połączenia z serwerem' });
    }
};

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Sekcja I - Dane badanego */}
        <h3>Sekcja I - Dane badanego</h3>
        <label>
          ID badanego:
          <input type="text" name="participantID" value={data.participantID} onChange={handleChange} />
        </label>
        <label>
          Data urodzenia:
          <input type="date" name="birthDate" value={data.birthDate} onChange={handleChange} />
        </label>
        <label>
          Wysokość ciała_1 (cm):
          <input
            type="range"
            name="height1"
            min="120"
            max="200"
            value={data.height1}
            onChange={(e) => handleRangeChange("height1", e.target.value)}
          />
          <span>{data.height1} cm</span>
        </label>
        <label>
          Wysokość ciała_2 (cm):
          <input
            type="range"
            name="height2"
            min="120"
            max="200"
            value={data.height2}
            onChange={(e) => handleRangeChange("height2", e.target.value)}
          />
          <span>{data.height2} cm</span>
        </label>
        <label>
          Wysokość siedzeniowa_1 (cm):
          <input
            type="range"
            name="sittingHeight1"
            min="50"
            max="120"
            value={data.sittingHeight1}
            onChange={(e) => handleRangeChange("sittingHeight1", e.target.value)}
          />
          <span>{data.sittingHeight1} cm</span>
        </label>
        <label>
          Wysokość siedzeniowa_2 (cm):
          <input
            type="range"
            name="sittingHeight2"
            min="50"
            max="120"
            value={data.sittingHeight2}
            onChange={(e) => handleRangeChange("sittingHeight2", e.target.value)}
          />
          <span>{data.sittingHeight2} cm</span>
        </label>
        <label>
          Masa ciała (kg):
          <input
            type="range"
            name="weight"
            min="30"
            max="100"
            value={data.weight}
            onChange={(e) => handleRangeChange("weight", e.target.value)}
          />
          <span>{data.weight} kg</span>
        </label>

        {/* Sekcja II - Test LBTR - ręka dominująca */}
        <h3>Sekcja II - Test LBTR - ręka dominująca</h3>
        <label>
          Czas (s):
          <input
            type="range"
            name="dominantHandTime"
            min="20"
            max="50"
            value={data.dominantHandTime}
            onChange={(e) => handleRangeChange("dominantHandTime", e.target.value)}
          />
          <span>{data.dominantHandTime} s</span>
        </label>
        <label>
          Liczba hits (s):
          <input
            type="range"
            name="dominantHandHits"
            min="5"
            max="50"
            value={data.dominantHandHits}
            onChange={(e) => handleRangeChange("dominantHandHits", e.target.value)}
          />
          <span>{data.dominantHandHits}</span>
        </label>
        <label>
          ID pomiaru:
          <input type="text" name="dominantHandID" value={data.dominantHandID} onChange={handleChange} />
        </label>

        {/* Sekcja III - Test LBTR - ręka niedominująca */}
        <h3>Sekcja III - Test LBTR - ręka niedominująca</h3>
        <label>
          Czas (s):
          <input
            type="range"
            name="nonDominantHandTime"
            min="20"
            max="50"
            value={data.nonDominantHandTime}
            onChange={(e) => handleRangeChange("nonDominantHandTime", e.target.value)}
          />
          <span>{data.nonDominantHandTime} s</span>
        </label>
        <label>
          Liczba hits (s):
          <input
            type="range"
            name="nonDominantHandHits"
            min="5"
            max="50"
            value={data.nonDominantHandHits}
            onChange={(e) => handleRangeChange("nonDominantHandHits", e.target.value)}
          />
          <span>{data.nonDominantHandHits}</span>
        </label>
        <label>
          ID pomiaru:
          <input type="text" name="nonDominantHandID" value={data.nonDominantHandID} onChange={handleChange} />
        </label>

        {/* Sekcja IV - Test LBTR - 2 ręce */}
        <h3>Sekcja IV - Test LBTR - 2 ręce</h3>
        <label>
          Czas (s):
          <input
            type="range"
            name="bothHandsTime"
            min="20"
            max="50"
            value={data.bothHandsTime}
            onChange={(e) => handleRangeChange("bothHandsTime", e.target.value)}
          />
          <span>{data.bothHandsTime} s</span>
        </label>
        <label>
          Liczba hits (s):
          <input
            type="range"
            name="bothHandsHits"
            min="5"
            max="50"
            value={data.bothHandsHits}
            onChange={(e) => handleRangeChange("bothHandsHits", e.target.value)}
          />
          <span>{data.bothHandsHits}</span>
        </label>
        <label>
          ID pomiaru:
          <input type="text" name="bothHandsID" value={data.bothHandsID} onChange={handleChange} />
        </label>

        {/* Sekcja V */}
        <h3>Sekcja V</h3>
        <label>
          Uwagi:
          <textarea name="notes" value={data.notes} onChange={handleChange} />
        </label>
        <label>
          Zasięg ramion (cm):
          <input
            type="range"
            name="armSpan"
            min="100"
            max="220"
            value={data.armSpan}
            onChange={(e) => handleRangeChange("armSpan", e.target.value)}
          />
          <span>{data.armSpan} cm</span>
        </label>

        <button type="submit">Zapisz dane</button>

        <p className="info-text">
          System ICT do zbierania danych w ramach projektu React 4 Sport. Celem projektu jest automatyzacja gromadzenia i analizy wyników testu LBRT.
        </p>
      </form>

      {message && (
        <div className={`popup ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default LBRTForm;