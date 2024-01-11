import React, { useEffect, useState } from "react";
import Container from "../container";
import Header from "../conpomemt/header";
import { Button, Form, Input, Table, Space,InputNumber  } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const Home = () => {
  const [form] = Form.useForm();

  const [method, setMethod] = useState("income");
  const [transaction, setTransaction] = useState([]);
  const [totals, setTotals] = useState({
    income: 0,
    expense: 0,
    profitLoss: 0,
  });
  const [iseEdit, setIseEdit] = useState(null);
  console.log(iseEdit);
  useEffect(() => {
    if (transaction.length) {
      let income = 0;
      let expense = 0;
      transaction.forEach((data) => {
        if (data.method === "income") {
          income += parseInt(data.amount);
        } else {
          expense += parseInt(data.amount);
        }
      });
      setTotals({ income, expense, profitLoss: income - expense });
    }
  }, [transaction]);
  const onFinish = (values) => {
    if (iseEdit !== null) {
      transaction[iseEdit] = {
        ...values,
        method,
        Updated_at: new Date().toLocaleString(),
      };
      setTransaction([...transaction]);
      setIseEdit(null);
    } else {
      const obj = {
        ...values,
        method,
        created_at: new Date().toLocaleString(),
      };
      console.log(obj);
      setTransaction([obj, ...transaction]);
    }
    form.resetFields();
    setMethod(undefined);
  };

  const deleteTransaction = (ind) => {
    setTransaction(
      transaction.filter((data, i) => {
        return i !== ind;
      })
    );
    setIseEdit(false);
  };
  const EditTransection = (data, ind) => {
    setIseEdit(ind);
    console.log(iseEdit);
    form.setFieldsValue({
      amount: data.amount,
      description: data.description,
    });
    setMethod(data.method);
  };
  const columns = [
    {
      title: "Price",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <p className="font-semibold text-center">{text}</p>,
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
      render: (text) => <p className="font-semibold text-center">{text}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <p className="font-semibold text-center">{text}</p>,
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => <p className="font-semibold text-center">{text}</p>,
    },
    {
      title: "Updated At",
      dataIndex: "Updated_at",
      key: "Updated_at",
      render: (text) => <p className="font-semibold text-center">{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, data, ind) => (
        <Space size="middle">
          <a
          className="">
            <EditOutlined
              onClick={() => {
                EditTransection(data, ind);
              }}
            />
          </a>
          <a
          className="text-center"
            onClick={() => {
              deleteTransaction(ind);
            }}
          >
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <Container>
      <div className="bg-stone-300">

      <p className="font-semibold mb-10 text-center text-3xl text-stone-600">ExpenseTracker</p>
      <div
      className="text-stone-300 bg-stone-600 shadow-lg  rounded-lg my-2 mx-[400px] "
          style={{
            // flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-xl">Balance</p>
          <h1
            className="font-bold text-[40px]"
          >
            {totals.profitLoss}
          </h1>
        </div>
      <div className="flex  justify-evenly shadow-lg mb-10 text-stone-600 bg-stone-300  rounded-lg my-2 mx-[400px]">

        
        <div
          className="p-3 "
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <p className="text-xl">Income</p>
          <h1 className="font-bold text-[40px]">
            {totals.income}
          </h1>
        </div>
        <div
          className="p-3 "
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "",
            alignItems: "center",
          }}
        >
          <p className="text-xl">Expense</p>
          <h1 className="font-bold text-[40px]">
            {totals.expense}
          </h1>
        </div>
       
      </div>
      <div className="flex justify-center">
        <div
          onClick={() => setMethod("expense")}
          className={`mx-3 border p-3 rounded-2xl`}
          style={{
            backgroundColor: method === "expense" && "#57534E",
            color: method === "expense" && "#D6D3D1",
            
          }}
        >
           Expense
        </div>
        <div
          onClick={() => setMethod("income")}
          className="mx-3 border p-3 rounded-2xl"
          style={{
            backgroundColor: method === "income" && "#57534E",
            color: method === "income" && "#D6D3D1",

          }}
        >
          Income
        </div>
      </div>
      <div  className="mt-10 flex justify-center">

      <Form 
      
        form={form}
       
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: 500,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
    
          label="amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount!",
            },
          ]}
          
        >
          <Input  className="bg-transparent border-stone-400"/>
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input className="bg-transparent border-stone-400"/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit" className="text-center bg-stone-600 text-stone-300">
            {iseEdit !== null ? "Edit" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
      </div>
     
      <Table dataSource={transaction} columns={columns} />;
      </div>
    </Container>
  );
};

export default Home;
