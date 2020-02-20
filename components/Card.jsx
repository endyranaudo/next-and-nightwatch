import React from 'react';

const Card = ({ fullName }) => {
  return (
    <>
      <div id="card" className="card-box">
        <h2>Welcome</h2>
        <h2 id="your-name">{fullName}</h2>
      </div>

      <style jsx>{`
        width: 400px;
        height: 100%;
        margin-top: 48px;
        background-color: lightblue;
        color: white;
        text-align: center;

        h2{
          margin: 16px 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default Card;
