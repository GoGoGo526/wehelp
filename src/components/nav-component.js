import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  //   return <div>nav-component</div>;
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    個人簡介和
                    <br />
                    申請動機。
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/display">
                    曾經做過哪些軟體工程技術
                    <br />
                    相關的學習？
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="schedule">
                    如果參與這個訓練，
                    <br />
                    會怎麼安排學習時間？
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/return">
                    軟體技術日新月異，如何確定投入的
                    <br />
                    領域是正確有回報的？
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/emotions">
                    請描述一件產生明顯負面情緒的經歷，
                    <br />
                    如何處理該情緒？
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/reflection">
                    關於這份申請網頁，
                    <br />
                    分享一個開發時的技術心得。
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/ai">
                    如何看待人工智慧的發展
                    <br />
                    對軟體工程師的影響？
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/other">
                    其他想要對我們說的事情？
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
