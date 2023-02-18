import { Heading, Box, Text, Divider, Flex, Button } from "@chakra-ui/react";
import SpinnerLoading from "./SpinnerLoading";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getTodoResult } from "../Redux/action";
import { FaRegTrashAlt } from "react-icons/fa";
import { CgToggleOff } from "react-icons/cg";
import { CgToggleOn } from "react-icons/cg";
import "../CSS/Todo.css";

const TodoList = () => {
  const store = useSelector((state) => state);
  const { isLoading, isError, data } = store;

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  useEffect(() => {
    dispatch(getTodoResult());
  }, []);
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      {isLoading ? (
        <SpinnerLoading style={{ justifyContent: "center" }} />
      ) : (
        data &&
        data.map((el) => {
          return (
            <Box key={el.id}>
              <Flex justify={"space-evenly"}>
                <Text className="title" fontSize={"xl"}>
                  {el.title}
                </Text>

                <Button
                  onClick={() => handleDelete(el.id)}
                  style={{ backgroundColor: "pink" }}
                >
                  <FaRegTrashAlt />
                </Button>
                <Button>{<CgToggleOn />}</Button>
              </Flex>
              <Divider style={{ height: "4px" }} />
            </Box>
          );
        })
      )}
    </div>
  );
};
//
export default TodoList;
