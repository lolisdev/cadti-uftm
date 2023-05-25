import React from "react";
import "./Content.css";
import { PcDisplay } from "react-bootstrap-icons";

function Content() {
  return (
    <div className="container d-flex align-items-center" id="content-page">
      <div className="form-container table-responsive">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Nome do Equipamento</th>
              <th>Endereço MAC ETH / Wi-Fi</th>
              <th>Porta Switch</th>
              <th>Ponto de Rede</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-success rounded-pill d-inline">
                  Ativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-sm btn-rounded btn-sm fw-bold"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-danger rounded-pill d-inline">
                  Inativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-danger rounded-pill d-inline">
                  Inativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-success rounded-pill d-inline">
                  Ativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-success rounded-pill d-inline">
                  Ativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-danger rounded-pill d-inline">
                  Inativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <PcDisplay className="icon-item" />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">MICRO99999</p>
                    <p class="text-muted mb-0">192.168.10.19</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">A0:2C:2A:1A:11</p>
                <p class="text-muted mb-0">A3:1C:F1:1B:9A</p>
              </td>
              <td>
                <p class="text-muted mb-1">U3-UA-2131-ABCD-00</p>
                <span class="badge badge-danger rounded-pill d-inline">
                  Inativo
                </span>
              </td>
              <td>AT01-1-P05-PT14</td>
              <td>
                <button
                  type="button"
                  class="btn btn-link btn-rounded btn-sm fw-bold"
                  data-mdb-ripple-color="dark"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content;
