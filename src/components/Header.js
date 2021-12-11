import { InputGroup, Input, Form, Button } from "reactstrap";
import { useState } from "react";

const Header = ({ onSearch }) => {
  //state
  const [bookSearch, setBookSearch] = useState("");

  return (
    <div className="main-image d-flex justify-content-center align-items-center flex-column">
      <div className="filter"></div>
      {/* <h1 className="display-2 text-center text-white mb-3" style={{zindex: 2}}>
            CONEXIONESLIBRERIA
          </h1> */}
      <div style={{ width: "60%", zIndex: 2 }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(bookSearch);
            setBookSearch("");
          }}
        >
          <InputGroup size="lg" className="mb-3">
            <Input
              placeholder="Book search"
              value={bookSearch}
              onChange={(e) => setBookSearch(e.target.value)}
            />
            <Button type="submit" color="secondary" value="Agregar">
              <i className="fa fa-search"></i>
            </Button>
          </InputGroup>
        </Form>
        <div className="d-flex text-white justify-content-center"></div>
      </div>
    </div>
  );
};
export default Header;
