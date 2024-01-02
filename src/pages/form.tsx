import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Flex, Select, Button, Form, Typography, Space, Input, Tooltip, Radio, Checkbox } from 'antd';
import styles from './page.module.css'
import { useTranslation } from "react-i18next";
import type { RadioChangeEvent } from 'antd';
import { VscTriangleUp, VscTriangleDown, VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { FaCircle, FaSquare } from "react-icons/fa";
import { TbOvalVerticalFilled } from "react-icons/tb";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


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

  const [value, setValue] = useState(1);

  const onChangeR = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onChangeC = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };


  const dataTable =
    [{
      name: 'name',
      male: 'male',
      phone: "090009213",
      tt: "ไทย",
      mg: "งานจัดการ"
    },
    {
      name: 'name2',
      male: 'male',
      phone: "090009213",
      tt: "ไทย",
      mg: "งานจัดการ2"
    },
    {
      name: 'name3',
      male: 'male',
      phone: "090009213",
      tt: "ไทย",
      mg: "งานจัดการ3"
    },
    ]

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
        <Row justify="center" style={{ width: '70%', borderStyle: "solid", borderColor: "#000", borderRadius: "1rem", padding: "3rem" }}>
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 25 }}
            style={{ maxWidth: "100%" }}
          >

            {/* ----------------------------------- */}
            <Form.Item >
              <Form.Item
                label="คำนำหน้า"
                name="คำนำหน้า"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Select placeholder="คำนำหน้า">
                  <Option value="1">คำนำหน้า1</Option>
                  <Option value="2">คำนำหน้า2</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="ชื่อจริง"
                name="ชื่อจริง"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="ชื่อจริง" />
              </Form.Item>


              <Form.Item
                label="นามสกุล"
                name="นามสกุล"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="นามสกุล" />
              </Form.Item>

            </Form.Item>
            {/* ----------------------------------- */}



            {/* ----------------------------------- */}
            <Form.Item >
              <Form.Item
                label="วันเกิด"
                name="วันเกิด"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(49% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="วันเกิด" />
              </Form.Item>

              <Form.Item
                label="สัญชาติ"
                name="สัญชาติ"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(49% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="สัญชาติ" />
              </Form.Item>

            </Form.Item>
            {/* ----------------------------------- */}


            {/* ----------------------------------- */}
            <Form.Item >
              <Form.Item
                label="เลขบัตรประชาชน"
                name="เลขบัตรประชาชน1"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(20% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>

              <Form.Item
                label="-"
                name="เลขบัตรประชาชน2"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(20% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>


              <Form.Item
                label="-"
                name="เลขบัตรประชาชน3"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(20% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>

              <Form.Item
                label="-"
                name="เลขบัตรประชาชน4"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(20% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>

              <Form.Item
                label="-"
                name="เลขบัตรประชาชน5"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(20% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>

            </Form.Item>
            {/* ----------------------------------- */}


            {/* ----------------------------------- */}
            <Form.Item label="เพศ"
              name="เพศ"
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(100% )', justifyContent: "start", marginBottom: "1rem" }}>
              <Radio.Group onChange={onChangeR} value={value}>
                <Radio value={1}>ผู้ชาย</Radio>
                <Radio value={2}>ผู้หญิง</Radio>
                <Radio value={3}>ไม่ระบุ</Radio>
              </Radio.Group>
            </Form.Item>
            {/* ----------------------------------- */}


            {/* ----------------------------------- */}
            <Form.Item >
              <Form.Item
                label="หมายเลขโทรศัพท์"
                name="หมายเลขโทรศัพท์"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>

              <Form.Item
                label="-"
                name="หมายเลขโทรศัพท์2"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="" />
              </Form.Item>

            </Form.Item>
            {/* ----------------------------------- */}


            {/* ----------------------------------- */}
            <Form.Item >
              <Form.Item
                label="หนังสือเดินทาง"
                name="หนังสือเดินทาง"
                rules={[{ required: false }]}
                style={{ display: 'inline-block', width: 'calc(34% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="หนังสือเดินทาง" />
              </Form.Item>

            </Form.Item>
            {/* ----------------------------------- */}


            {/* ----------------------------------- */}
            <Form.Item >
              <Form.Item
                label="เงินเดือนที่คาดหวัง"
                name="เงินเดือนที่คาดหวัง"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Input placeholder="เงินเดือนที่คาดหวัง" />
              </Form.Item>

              <Form.Item
                label=""
                name="submit"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0, marginLeft: "2rem" }}
              >
                <Button type="primary" htmlType="submit">
                  ส่งข้อมูล
                </Button>
              </Form.Item>


              <Form.Item
                label=""
                name="month"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(33% - 10px)', marginBottom: 0 }}
              >
                <Button type="primary" htmlType="submit">
                  ล้างข้อมูล
                </Button>
              </Form.Item>

            </Form.Item>
            {/* ----------------------------------- */}


          </Form>
        </Row>
      </Flex>

      <Flex justify="center" align="center" >
        <Row justify="start" style={{ width: '90%', marginTop: "1rem", }}>
          <Checkbox onChange={onChangeC}>เลือกทั้งหมด</Checkbox>
          <Button type="primary" htmlType="submit">
            ลบข้อมูล
          </Button>

          <Row justify="center" gutter={[0, 1]} style={{ width: "100%", marginTop: "1rem" }} >
            <Col span={4} style={{ backgroundColor: "white", color: "black" , padding:'1rem' }} >ชื่อ</Col>
            <Col span={4} style={{ backgroundColor: "white", color: "black" , padding:'1rem' }} >เพศ</Col>
            <Col span={4} style={{ backgroundColor: "white", color: "black" , padding:'1rem' }} >หมายเลขโทรศัพท์</Col>
            <Col span={4} style={{ backgroundColor: "white", color: "black" , padding:'1rem' }} >สัญชาติ</Col>
            <Col span={4} style={{ backgroundColor: "white", color: "black" , padding:'1rem' }} >จัดการ</Col>
          </Row>
          <>
            {( dataTable.length == 0|| dataTable == null) ?
              (
                <>
                  {dataTable.map((item, index) => (
                    <Row justify="center" gutter={[0, 1]} style={{ width: "100%" }} key={index}>
                      <Col span={4} style={{ backgroundColor: "white", color: "black", padding:'1rem' }} >{item.name}</Col>
                      <Col span={4} style={{ backgroundColor: "white", color: "black", padding:'1rem' }} >{item.male}</Col>
                      <Col span={4} style={{ backgroundColor: "white", color: "black", padding:'1rem' }} >{item.phone}</Col>
                      <Col span={4} style={{ backgroundColor: "white", color: "black", padding:'1rem' }} >{item.tt}</Col>
                      <Col span={4} style={{ backgroundColor: "white", color: "black", padding:'1rem' }} >{item.mg}</Col>
                    </Row>
                  ))};
                </>
              ) : (
                <Row justify="center" gutter={[0, 1]} style={{ width: "100%", height: "3rem" }} >
                  <Col span={20} style={{ backgroundColor: "white", color: "black", textAlign: "center" }} >ไม่มีข้อมูล</Col>
                </Row>
              )
            }
          </>
        </Row>


      </Flex>
    </>
  );
}
