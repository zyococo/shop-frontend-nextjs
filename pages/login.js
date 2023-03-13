import AppContext from "@/context/AppContext";
import { login, registerUser } from "@/lib/auth";
import { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Login = () => {
  const appContext = useContext(AppContext);
  const [data, setData] = useState({ username:"", password: "" });
  
  const handleLogin = () => {
    login(data.username,data.password)
    .then((res) => {
        appContext.setUser(res.data.user);
        // console.log(res.data.user);
      })
      .catch((err) => console.log(err));

  };

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }; 

  //   console.log(data);
  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ログイン</h2>
            </div>
          </div>
          <section className="wrapper"></section>
          <Form>
            <fieldset>
              <FormGroup>
                <Label>ユーザー名 : </Label>
                <Input
                  type="text"
                  name="username"
                  style={{ height: 50, fontSize: "1.2rem" }}
                  onChange={(e)=>handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>パスワード : </Label>
                <Input
                  type="password"
                  name="password"
                  style={{ height: 50, fontSize: "1.2rem" }}
                  onChange={(e)=>handleChange(e)}
                />
              </FormGroup>
              <span>
                <a href="">
                  <small>パスワードをお忘れですか？</small>
                </a>
              </span>
              <Button
                style={{ float: "right", width: 120 }}
                color="primary"
                onClick={() => {
                  handleLogin();
                }}
              >
                ログイン
              </Button>
            </fieldset>
          </Form>
        </Col>
      </Row>
      <style jsx>{`
        .paper {
          text-align: center;
          margin-top: 50px;
        }
        .header {
          width: 100%;
          margin-bottom: 30px;
        }
        .wrapper {
          padding: 10px 30px 20px 30px;
        }
      `}</style>
    </Container>
  );
};

export default Login;
