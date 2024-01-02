import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Flex, Select } from 'antd';
import styles from './page.module.css'
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'

export default function Main() {

  const { t, i18n } = useTranslation('trans');
  const navigate = useNavigate();
  const [selectlang, setselectlang] = useState();

  const handleOnChange = (e: React.ChangeEvent, value: any): void => {
    const language = value;
    i18n.changeLanguage(language);
  }

  return (
    <Flex wrap="wrap" style={{ width: '100%', height: "100vh" }} justify="center" align="center" >
      <Flex style={{ width: '90%', height: "10%" }} justify="end" align="end" vertical>
        <Select defaultValue="en" style={{ width: 120 }}
          // onChange={e => { handleOnChange(e.state.setselectlang) }}
          options={[
            { value: 'en', label: 'EN' },
            { value: 'th', label: 'TH' },
          ]}
        >
        </Select>
      </Flex>
      <Flex style={{ width: '100%', height: "90%" }} justify="center" align="center" vertical>
        <Row gutter={24} >
          <Col span={12} onClick={() => { navigate('/layout') }}>
            <Card style={{ width: 240 }} title="Test 1" bordered={false} >
              {t("line1", { ns: 'trans' })}
            </Card>
          </Col>
          <Col span={12} onClick={() => { navigate('/form') }}>
            <Card style={{ width: 240 }} title="Test 2" bordered={false}>
              {t("line2", { ns: 'trans' })}
            </Card>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};
