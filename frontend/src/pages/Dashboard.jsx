
import axios from "axios";

export function Dashboard() {
    const token = window.localStorage.getItem('token');
    console.log(token)
    const config = {
        headers : {authorization : token}
    }
    const user = axios.get("http://localhost:8001/api/v1/account/balance",config)
    return <div style={{ width: "95%" }}>
            <div className="navbar" style={{
                padding: "5px 20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                backgroundColor: "white"
            }}>
                <h1>Paytm</h1>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}>
                    <h3>Hello, {"User"}</h3>
                    <div style={{
                        backgroundColor: "lightGray",
                        borderRadius: "50%",
                        fontSize: "24px",
                        border: "1px solid black",
                        padding: "0 30px",
                        textAlign: "center",
                    }}><h3>
                            {"User"}
                        </h3>
                    </div>
                </div>
            </div>
    </div >
}