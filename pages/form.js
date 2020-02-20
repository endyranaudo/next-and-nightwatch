import React, { useState } from 'react';
import Link from 'next/link';
import Card from '../components/Card';

const form = () => {
  const [fullNameInput, setFullNameInput] = useState('');
  const [fullName, setFullName] = useState('');

  const handleChange = e => {
    setFullNameInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFullName(fullNameInput);
    console.log(fullNameInput)
  };

  return (
    <div className="container">
      <div className="main">
        <h1>FORM</h1>
        <div className="back-inline">
          <Link href="/">
            <a className="inline-link" id="back">
              ← Back
            </a>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="full-name">Please enter your full name</label>
            <input
              type="text"
              name="full-name"
              placeholder="Typer your first name"
              id="first-name"
              value={fullNameInput}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            className="primary-btn"
            value="Create Card"
          />
        </form>
      </div>
      <Card fullName={fullName} />

      <style jsx>{`
        h1 {
          text-align: center;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        select {
          width: 100%;
          padding: 12px 20px;
          margin: 16px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 1rem;
          color: #3d3d3d;
        }

        .primary-btn {
          padding: 10px 20px;
          font-size: 1rem;
          color: white;
          background-color: teal;
          border-radius: 10px;
        }

        .back-inline {
          margin-bottom: 30px;
        }

        .inline-link {
          padding-bottom: 2px;
          color: DarkSlateGray;
          text-decoration: none;
          cursor: pointer;
          border-bottom: 0.0625rem solid DarkSlateGray;
        }

        .inlinelink:hover {
          color: red;
        }

        .primary-btn:hover {
          box-shadow: inset 0 0 0 20rem lightSeaGreen;
        }

        .primary-btn:active {
          box-shadow: inset 0 0 0 20rem var(--darken-2),
            inset 0 3px 4px 0 var(--darken-3), 0 0 1px var(--darken-2);
        }

        .primary-btn:disabled,
        .primary-btn.is-disabled {
          opacity: 0.5;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #3d3d3d;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default form;
