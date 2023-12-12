import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="raz" style={{ display: "flex" }}>
  <div
    className="yue"
    style={{
      width: "50%",
      height: 600,
      backgroundColor: "rgb(223, 231, 231)",
      borderRadius: 10
    }}
  >
    <div className="top" style={{ display: "flex", padding: "10px 20px" }}>
      <div>
        <button
          className="flo"
          style={{
            width: 100,
            height: 50,
            backgroundColor: "rgb(32, 32, 169)",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 15,
            marginRight: 50
          }}
        >
          Thêm mới sinh viên
        </button>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search Here"
          className="zuka"
          style={{ width: 200, height: 30, marginRight: 50, marginTop: 10 }}
        />
      </div>
      <div>
        <button
          className="flo"
          style={{
            width: 100,
            height: 50,
            backgroundColor: "rgb(32, 32, 169)",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 15,
            marginRight: 50
          }}
        >
          {" "}
          Tìm kiếm{" "}
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Sắp xếp"
          className="zuka"
          style={{width: 200, height: 30, marginRright: 50, marginTop: 10}}
        />
      </div>
    </div>
    <div>
      <p style={{ fontSize: 20, marginLeft: 25 }}>Danh Sách Sinh Viên</p>
    </div>
    <div className="mid" style={{ marginLeft: 10 }}>
      <table width="98%" cellPadding={15} cellSpacing={0} border={1}>
        <tbody>
          <tr>
            <td>
              <p>#</p>
            </td>
            <td>
              <p>Mã sinh viên</p>
            </td>
            <td>Tên sinh viên</td>
            <td>Tuổi</td>
            <td>Giới tính</td>
            <td>Hành động</td>
          </tr>
          <tr>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>SV001</p>
            </td>
            <td>Nguyễn Văn A</td>
            <td>
              <p>20</p>
            </td>
            <td>
              <p>Nam</p>
            </td>
            <td>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Xem
              </button>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "rgb(218, 118, 30)",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Sửa
              </button>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "rgb(0, 255, 38)",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p>2</p>
            </td>
            <td>
              <p>SV002</p>
            </td>
            <td>Nguyễn Văn B</td>
            <td>
              <p>21</p>
            </td>
            <td>
              <p>Nữ</p>
            </td>
            <td>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Xem
              </button>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "rgb(218, 118, 30)",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Sửa
              </button>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "rgb(0, 255, 38)",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p>3</p>
            </td>
            <td>
              <p>SV003</p>
            </td>
            <td>Nguyễn Văn C</td>
            <td>
              <p>19</p>
            </td>
            <td>
              <p>Nam</p>
            </td>
            <td>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Xem
              </button>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "rgb(218, 118, 30)",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Sửa
              </button>
              <button
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: "rgb(0, 255, 38)",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div
    className="zata"
    style={{
      width: "50%",
      marginLeft: 50,
      backgroundColor: "rgb(233, 240, 240)",
      height: 600,
      borderRadius: 10
    }}
  >
    <p style={{ fontSize: 20, marginLeft: 20 }}>Thông Tin Sinh Viên</p>
    <div className="yorn" style={{ marginLeft: 20 }}>
      <table width="90%" cellPadding={5} cellSpacing={0}>
        <tbody>
          <tr>
            <td>
              <p>Mã sinh viên</p>
            </td>
            <td>
              <input
                type="text"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Tên sinh viên</p>
            </td>
            <td>
              <input
                type="text"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Tuổi</p>
            </td>
            <td>
              <input
                type="text"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Giới tính</p>
            </td>
            <td>
              <input
                type="text"
                placeholder="Nam"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Ngày sinh</p>
            </td>
            <td>
              <input
                type="date"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Nơi sinh</p>
            </td>
            <td>
              <input
                type="text"
                placeholder="Hà Nội"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Địa chỉ</p>
            </td>
            <td>
              <input
                type="text"
                style={{
                  width: 500,
                  height: 30,
                  backgroundColor: "#e0dbdb",
                  border: "none"
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      style={{
        marginLeft: 20,
        width: 100,
        height: 35,
        backgroundColor: "rgb(56, 56, 152)",
        color: "white",
        border: "none",
        borderRadius: 5
      }}
    >
      Submit
    </button>
  </div>
</div>

  );
}

export default App;
