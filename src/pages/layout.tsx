import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Flex, Select, Button, Badge,Typography } from 'antd';
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

  return (
    <>
      <Flex wrap="wrap" style={{ width: '100%', height: "10%", margin: "5rem" }} justify="space-around" align="center" vertical>
        <Row style={{ width: '100%' }}>
          <Col span={12}><Title >Layout & style</Title></Col>
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

      <Flex style={{ width: '100%' }} justify="center" align="center" >
        <Row gutter={[40, 40]}>
          <Flex style={{ width: '100%' }} justify="center" >
            <Col span={6}>
              <Badge count={"Move shape"} offset={[-150, 155]}>
                <Button style={{ width: "20rem", height: "10rem", backgroundColor: "wiite" }} type="primary">
                  <VscTriangleLeft size={150} />
                </Button>
              </Badge>
            </Col>
            <Col span={10}>
              <Badge count={"Move position"} offset={[-330, 155]}>
                <Button style={{ width: "40rem", height: "10rem" }} type="primary">
                  <VscTriangleUp size={150} /><VscTriangleDown size={150} />
                </Button>
              </Badge>
            </Col>
            <Col span={6}>
              <Badge count={"Move shape"} offset={[-150, 155]}>
                <Button style={{ width: "20rem", height: "10rem" }} type="primary">
                  <VscTriangleRight size={150} />
                </Button>
              </Badge>
            </Col>
          </Flex >

          <Flex style={{ width: '100%' }} justify="flex-end" >
            <Col span={6}><Button style={{ width: "20rem", height: "10rem" }} type="primary"><FaCircle size={150} /></Button></Col>
            <Col span={6}><Button style={{ width: "20rem", height: "10rem" }} type="primary"><TbOvalVerticalFilled size={150} /></Button></Col>
            <Col span={6}><Button style={{ width: "20rem", height: "10rem" }} type="primary"><FaSquare size={150} /></Button></Col>
          </Flex >

          <Flex style={{ width: '100%' }} justify="center" >
            <Col span={6}><Button style={{ width: "20rem", height: "10rem" }} type="primary"><FaSquare size={150} /> </Button></Col>
            <Col span={6}><Button style={{ width: "20rem", height: "10rem" }} type="primary"><FaSquare size={150} /> </Button></Col>
            <Col span={6}><Button style={{ width: "20rem", height: "10rem" }} type="primary"><FaSquare size={150} /></Button></Col>
          </Flex >

        </Row>
      </Flex >
    </>
  );
}
