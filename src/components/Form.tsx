import React, { useState } from "react";
import {Form, Input, Button} from 'antd';
import { createTeam } from "../service/team.service";


export default function TeamForm(){
  const [name, setName] = useState("")
  const [city, setCity] = useState("")

  const handleForm = async () => {
    try {
    await createTeam({name, city})
    }
    catch (err) {
      alert(err)
    }
    }

  return (
    <Form onFinish={handleForm} labelCol={{span: 8}} wrapperCol={{span:16}} className="container">
      <Form.Item label="Team Name" name="Name" 
      rules={[{required: true, message: "Please include your team name"}]}>
        <Input value={name} onChange={e => setName(e.target.value)}/>
    </Form.Item>
      <Form.Item label="Team City" name="Team City" 
      rules={[{required: true, message: "Please enter your team's city"}]}>
        <Input value={city} onChange={e => setCity(e.target.value)}/>
    </Form.Item>
    <Form.Item labelCol={{span: 8}} wrapperCol={{span:16}}>
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
    </Form>
  )
  }