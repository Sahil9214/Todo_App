import React, { useState } from "react";
import "../CSS/Todo.css";
import {
  Box,
  Text,
  Heading,
  FormLabel,
  Flex,
  Input,
  Divider,
} from "@chakra-ui/react";
import { Grommet } from "grommet-icons";
import { Button } from "grommet";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { AddTodoValue } from "../Redux/action";

const TodoInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let new_add = {
      id: Date.now(),
      title: text,
      liked: false,
    };
    dispatch(AddTodoValue(new_add));
    setText("");
  };

  return (
    <div className="TodoInput">
      <Box className="flex_box">
        <FormLabel style={{ textAlign: "center" }}>Add Todo Here</FormLabel>
        <Input
          className="input_box"
          type="text"
          onChange={handleChange}
          style={{ border: "1px solid black" }}
          value={text}
        />
        <Divider className="divider" />
        <Button
          className="btn_Add Todo"
          style={{
            padding: "7px 30px",
            borderRadius: "8px 16px",
            background: "#4dd564",
            boxShadow: "38px 38px 60px #1f5528,-38px -38px 60px #7bffa0",
            margin: "auto",
            marginLeft: "120px",
          }}
          onClick={handleClick}
        >
          Add Todo
        </Button>
      </Box>
      <Box>
        <Divider style={{ height: "4px" }} />
        <br />
        <br />
        <TodoList />
      </Box>
      <svg
        style={{ zIndex: "2", backgroundAttachment: "fixed" }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M45.1,-31.8C59,-18.5,71.3,0.3,70,20.1C68.8,40,54.1,60.9,35.1,68.3C16.1,75.8,-7.3,69.7,-30,59.7C-52.7,49.8,-74.8,36,-75.7,20.6C-76.6,5.2,-56.3,-11.8,-40.2,-25.6C-24,-39.3,-12,-49.9,1.8,-51.3C15.6,-52.8,31.2,-45,45.1,-31.8Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default TodoInput;
