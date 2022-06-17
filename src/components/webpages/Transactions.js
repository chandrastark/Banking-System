/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";

function Transactions() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    db
    .collection("transactions")
    .onSnapshot((snapshot) =>
      setState(
        snapshot.docs.map((doc) => ({ id: doc.id,  data: doc.data() }))
      )
    )
  }

  return (
    <div className="transactions" css={CSS}>
      <h1>Transaction History</h1>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>ID</td>
              <td>Payer</td>
              <td>Receiver</td>
              <td>Amount</td>
              <td>Date and Time</td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i % 2 === 0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.sender}</td>
                <td>{obj.data.receiver}</td>
                <td>{obj.data.amount}</td>
                <td>{`${obj.data.createdAt?.toDate().toDateString() ? obj.data.createdAt?.toDate().toDateString() : "Not"} ${obj.data.createdAt?.toDate().toLocaleTimeString('en-US') ? obj.data.createdAt?.toDate().toLocaleTimeString('en-US') : "Available"}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <img src='/Banking-System/images/purpleBG.jpg' />
    </div>
  );
}

const CSS = css`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgb(72, 202, 228);
  background: linear-gradient( 180deg, rgb(188 48 195) 0%, rgb(196 106 197) 50%, rgb(248 202 246) 100% );
  
  font-family: "Roboto", sans-serif;
  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: #0e0404;
    z-index:100
    
  }
  
    img {
      object-fit: cover ;
      width: 100%;
      height:100vw;
      position: fixed;
      opacity: 0.4;
      
    }
    .transactions{
      height: 100%;
      width: 100%;
      background-position: center;
      background-size: cover;
    }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  .table {
    display: table;
    overflow: scroll;
    
    table {
      text-align:center;
      position: absolute;
      left: 50%;
      top: 60%;
      z-index:100;
    background:white;
      transform: translate(-50%, -50%);
      table-layout: fixed;
      color: var(--powder-blue);
      border-collapse: collapse;
      border: 1px solid #bdc3c7;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);
      thead {
        background-color: var(--navy-blue);
        tr {
          transition: all .2s ease-in;
          cursor: pointer;
          header{
            background-color: #16a085;
            color: #fff;
        }
          td {
            padding: 20px;
            text-align: center;
            font-weight: 700;
            border-bottom: 1px solid #ddd;
            ion-icon {
              font-size: 20px;
            }
          }
        }
      }
      
      tbody {
        
        margin-bottom: 20px;
        tr {
          a{
            color: #BF0000;
            transition: all 0.3s ease;
          }
          a:hover {
            text-decoration: underline;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            text-align: center;
          }
        }
        tr:hover {
          background-color: #f5f5f5;
          transform: scale(1.01);
          box-shadow: 0px 0px 10px purple;
      }
        .light {
          background-color: var(--sky-blue-crayola);
        }
      }
    }
  }
`;

export default Transactions;