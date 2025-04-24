import React from "react";
import "./Content.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Content = () => {
  const doughnutData = {
    labels: ["Tarefas Criadas", "Tarefas Realizadas"],
    datasets: [
      {
        data: [100, 80],
        backgroundColor: ["red", "lightgreen"],
        hoverBackgroundColor: ["red", "lightgreen"],
      },
    ],
  };

  return (
    <div className="content">
      <div className="dashboard-section">
        <div className="dashboard-grid">
          <div className="dashboard-item">
            <h2>Tarefas Criadas/Realizadas</h2>
            <Doughnut data={doughnutData} />
          </div>
          <div className="dashboard-item">
            <h2>Trofeus Conquistados</h2>
            <div className="progress-bar">
              <div className="progress-bar-filled" style={{ width: "80%" }}>
                8/10
              </div>
            </div>
            <h2>XP para o Próximo Nível</h2>
            <div className="progress-bar">
              <div className="progress-bar-filled" style={{ width: "0.9%" }}>
                11252315/1255356454 XP
              </div>
            </div>
            <div className="badges-container">
              <h2>Badges Ganhos</h2>
              <div className="badges-grid">
                <div className="badge">
                  <img src="badge1.png" alt="Badge 1" />
                  <span>Badge 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tasks-section">
        <h1>TASKS</h1>
        <div className="tasks-grid">
          <div className="task-column">
            <h2>TO-DO</h2>
            <div className="task-card">
              <h3>Tarefa 1</h3>
              <p>Descrição da tarefa 1</p>
              <p>Responsável: João</p>
            </div>
            <div className="task-card">
              <h3>Tarefa 2</h3>
              <p>Descrição da tarefa 2</p>
              <p>Responsável: Maria</p>
            </div>
          </div>
          <div className="task-column">
            <h2>IN PROGRESS</h2>
            <div className="task-card">
              <h3>Tarefa 3</h3>
              <p>Descrição da tarefa 3</p>
              <p>Responsável: Pedro</p>
            </div>
          </div>
          <div className="task-column">
            <h2>REVIEW</h2>
            <div className="task-card">
              <h3>Tarefa 4</h3>
              <p>Descrição da tarefa 4</p>
              <p>Responsável: Ana</p>
            </div>
          </div>
          <div className="task-column">
            <h2>QA</h2>
            <div className="task-card">
              <h3>Tarefa 5</h3>
              <p>Descrição da tarefa 5</p>
              <p>Responsável: Carlos</p>
            </div>
          </div>
          <div className="task-column">
            <h2>DONE</h2>
            <div className="task-card">
              <h3>Tarefa 6</h3>
              <p>Descrição da tarefa 6</p>
              <p>Responsável: Luana</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-section">
        <h1>SHOP</h1>
        <div className="shop-grid">
          <div className="shop-item">
            <img src="https://via.placeholder.com/100" alt="Prêmio 1" />
            <h2>Prêmio 1</h2>
            <p>$ 100 TaskCoins</p>
          </div>
          <div className="shop-item">
            <img src="https://via.placeholder.com/100" alt="Prêmio 2" />
            <h2>Prêmio 2</h2>
            <p>$ 200 TaskCoins</p>
          </div>
          <div className="shop-item">
            <img src="https://via.placeholder.com/100" alt="Prêmio 3" />
            <h2>Prêmio 3</h2>
            <p>$ 300 TaskCoins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
