/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { Link } from "react-router-dom";

function AllCustomers() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
      db
        .collection("users")
        .orderBy("name")
        .onSnapshot((snapshot) =>
          setState(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        )
  };

  return (
    <div className="allOurCustomers" css={CSS}>
      <h1>Vision Bank Accounts</h1>
      <div className="table">
        <table className="table">
          <thead>
            <tr className="text-center" id="header">
              <td>UID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Account Number</td>
              <td>Current Balance</td>
              <td><ion-icon name="cash-outline"></ion-icon></td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i%2===0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.name}</td>
                <td>{obj.data.email}</td>
                <td>{obj.data.accountno}</td>
                <td>{obj.data.balance}</td>
                <td><Link to ="/transfer">Transfer Money</Link></td>
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
  
 .table{
  z-index:100;
  background:white;
 }
  img {
    object-fit: cover ;
    width: 100%;
    height:100vw;
    position: fixed;
    opacity: 0.4;
    
  }
  .allOurCustomers{
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
  h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: #0e0404;
    z-index:100
    
  }

  h1:hover{
    color:cyan;
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  .table {
    text-align:center;
    display: table;
    overflow: scroll;
    table {
      position: absolute;
      left: 50%;
      top: 60%;
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
            padding: 12px;
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
        background-color: var(--cerulean-crayola);
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
          box-shadow: 2px 2px 12px purple, -1px -1px 8px rgba(0, 0, 0, 0.2);
      }
        .light {
          background-color: var(--sky-blue-crayola);
        }
      }
    }
  }
`;


export default AllCustomers;