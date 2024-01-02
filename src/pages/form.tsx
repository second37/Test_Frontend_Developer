import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Flex, Select, Button, Form, Typography, Space, Input, Tooltip } from 'antd';
import styles from './page.module.css'
import { useTranslation } from "react-i18next";
import { VscTriangleUp, VscTriangleDown, VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { FaCircle, FaSquare } from "react-icons/fa";
import { TbOvalVerticalFilled } from "react-icons/tb";



export default function Layout() {

  const { t, i18n } = useTranslation('trans');
  const navigate = useNavigate();
  const { Title } = Typography;
  const [selectlang, setselectlang] = useState();

  const handleOnChange = (e: React.ChangeEvent, value: any): void => {
    const language = value;
    i18n.changeLanguage(language);
  }

  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Flex wrap="wrap" style={{ width: '100%', height: "10%", margin: "5rem" }} justify="space-around" align="center" vertical>
        <Row style={{ width: '100%' }}>
          <Col span={12}><Title >Form & table</Title></Col>
          <Col span={12}>
            <Select defaultValue="en" style={{ width: 120 }}
              // onChange={e => { handleOnChange(e.state.setselectlang) }}
              options={[
                { value: 'en', label: 'EN' },
                { value: 'th', label: 'TH' },
              ]}
            >
            </Select>
          </Col>
        </Row>
      </Flex>

      <Flex justify="center" align="center" >
        <Row justify="start" style={{ width: '70%', borderStyle: "solid",borderColor:"#000",borderRadius:"1rem" , padding: "5rem" }}>
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="คำนำหน้า">
              <Space>
                <Form.Item
                  name="username"
                  noStyle
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Input style={{ width: 160 }} placeholder="Please input" />
                </Form.Item>
              </Space>

             
              <Space>
                <Form.Item label="คำนำหน้า"
                  name="username"
                  noStyle
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                  <Input style={{ width: 160 }} placeholder="Please input" />
                </Form.Item>
              </Space>
          
            </Form.Item>
            

            <Form.Item label="Address">
              <Space.Compact>
                <Form.Item
                  name={['address', 'province']}
                  noStyle
                  rules={[{ required: true, message: 'Province is required' }]}
                >
                  <Select placeholder="Select province">
                    <Option value="Zhejiang">Zhejiang</Option>
                    <Option value="Jiangsu">Jiangsu</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name={['address', 'street']}
                  noStyle
                  rules={[{ required: true, message: 'Street is required' }]}
                >
                  <Input style={{ width: '50%' }} placeholder="Input street" />
                </Form.Item>
              </Space.Compact>
            </Form.Item>

            <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
              <Form.Item
                name="year"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
              >
                <Input placeholder="Input birth year" />
              </Form.Item>
              <Form.Item
                name="month"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
              >
                <Input placeholder="Input birth month" />
              </Form.Item>
            </Form.Item>

            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

          </Form>
        </Row>
      </Flex>

    </>
  );
}
