import React from 'react'
import { Card, Field, Form, Grid, Input, NumberPicker, Box } from '@alifd/next'
import _style from './index.module.css'
const { Row, Col } = Grid

const formItemLayout = {
    labelCol: { span: 14 },
    wrapperCol: { span: 10 },
}

function NewDocument(props) {
    const field = Field.useField({
        onChange: function (name, value) {
            field.setValue(name, value)
        },
    })
    return (
        <Card free className={_style.main}>
            <Card.Header title={'mawb information'} />
            <Card.Divider />
            <Form field={field}>
                <Row>
                    <Col span={12}>
                        <Form.Item label="shipper" required={true}>
                            <Input placeholder="shipper" name="shipper" />
                            <Input.TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="consignee">
                            <Input placeholder="consignee" name="consignee" />
                            <Input.TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="issue carrier">
                            <Input placeholder="issue carrier" name="issue_carrier" />
                            <Input.TextArea rows={3} />
                        </Form.Item>
                        <Row>
                            <Col>
                                <Form.Item label="IATA Code">
                                    <Input placeholder="IATA_code" name="IATA_code" />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="account code">
                                    <Input placeholder="account_code" name="account_code" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="departure">
                            <Input placeholder="departure" name="departure" />
                        </Form.Item>
                        <Form.Item label="destination">
                            <Input placeholder="destination" name="destination" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="awb No." required={true}>
                            <Input.Group>
                                <Input
                                    placeholder="number"
                                    name="awb-prefix"
                                    value={999}
                                    disabled={true}
                                />
                                <Input placeholder="number" name="awb-body" />
                            </Input.Group>
                        </Form.Item>
                        <Form.Item label="carrier">
                            <Input placeholder="number" name="carrier" value={'air china'} />
                        </Form.Item>
                        <Form.Item label="accounting information or notify">
                            <Input.TextArea rows={10} name={'accounting'} />
                        </Form.Item>
                        <Form.Item label="charge code">
                            <Input placeholder="number" name="carrier" value={'pp'} />
                        </Form.Item>
                        <Form.Item label="declare value">
                            <Input placeholder="number" name="declare value" value={'NIL'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item label="handling information">
                            <Input.TextArea rows={3} defaultValue={'handling information'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <Row>
                            <Col span={7}>
                                <Form.Item {...formItemLayout} label="package count:">
                                    <Input.Group>
                                        <Input name="package" className={_style.input} />
                                        <span>pc</span>
                                    </Input.Group>
                                </Form.Item>
                            </Col>
                            <Col span={7}>
                                <Form.Item {...formItemLayout} label="gross weight">
                                    <Input.Group>
                                        <Input name="gross_weight" className={_style.input} />
                                        <span>kg</span>
                                    </Input.Group>
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Form.Item {...formItemLayout} label="chargeable weight">
                                    <Input.Group>
                                        <Input name="chargeable_weight" className={_style.input} />
                                        <span>kg</span>
                                    </Input.Group>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={20}>
                                <Form.Item label="other information">
                                    <Input.TextArea
                                        rows={5}
                                        name="other"
                                        defaultValue={'shipping mark'}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="nature of goods">
                            <Input.TextArea
                                rows={5}
                                name="nature of goods"
                                defaultValue={
                                    'CONSOLIDATED SHIPMENT AS PER ATTACHED CARGO MANIFEST'
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item label="other charge">
                        <Form.Item label="fsc" {...formItemLayout} labelTextAlign={'left'}>
                            <Input placeholder="number" name="fsc" value={'12'} />
                        </Form.Item>
                        <Form.Item label="ssc" {...formItemLayout} labelTextAlign={'left'}>
                            <Input placeholder="number" name="ssc" value={'12'} />
                        </Form.Item>
                    </Form.Item>
                </Row>
            </Form>
        </Card>
    )
}

export default NewDocument
