import React, { useState } from 'react';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Kart Üzerindeki İsim: ${name}
Kart Numarası: ${cardNumber}
Ay: ${month}
Yıl: ${year}
Güvenlik Kodu: ${cvv}`);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Ödeme Bilgileri</h2>
      <p style={styles.subheading}>Kredi kartı bilgilerinizi giriniz</p>

      <label style={styles.label}>Kart Üzerindeki İsim</label>
      <input
        type="text"
        placeholder="Ahmet Yılmaz"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        required
      />

      <label style={styles.label}>Kart Numarası</label>
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        style={styles.input}
        required
      />

      <div style={styles.row}>
        <div style={styles.column}>
          <label style={styles.label}>Ay</label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            style={styles.input}
            required
          >
            <option value="">AA</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m.toString().padStart(2, '0')}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.column}>
          <label style={styles.label}>Yıl</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={styles.input}
            required
          >
            <option value="">YY</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div style={styles.column}>
          <label style={styles.label}>Güvenlik Kodu</label>
          <input
            type="text"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={styles.input}
            required
          />
        </div>
      </div>

      <button type="submit" style={styles.button}>Şimdi Öde</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '15px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    border: '1px solid #eee',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  subheading: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '20px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
    display: 'block',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    marginBottom: '15px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  row: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
  },
  column: {
    flex: 1,
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PaymentForm;
