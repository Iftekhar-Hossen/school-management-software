import React from "react";

import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { Button, Col, Row, Card, Statistic } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboard() {
    const {session} = useSelector((session)=> session)
    console.log(session)

     const incomeData = {
        labels: ['Fees', 'Admission', 'Donation', 'Canteen', 'Stationery'],
        datasets: [
          {
            label: '# of Votes',
            data: [13353900, 5235235, 3523535, 3523523, 452352],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            
          },
        ],
      };
     const expenseData = {
        labels: ['Salary', 'Electric bill', 'Tax', 'Transport Repair', 'Building Repair'],
        datasets: [
          {
            label: '# of Votes',
            data: [2445334, 344208, 535356, 52350, 100000],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            
          },
        ],
      };
     const duePaidData = {
        labels: ['Due', 'Paid'],
        datasets: [
          {
            label: '# of Votes',
            data: [2445334, 344208],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],

            
          },
        ],
      };

    return (
        <>
            <div className="site-statistic-demo-card">
                <Row gutter={[16,16]}>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Teachers"
                                value={50}
                                valueStyle={{
                                    color: "#3f8600",
                                }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Students"
                                value={3000}
                                valueStyle={{
                                    color: "#3f8600",
                                }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Stuffs"
                                value={30}
                                valueStyle={{
                                    color: "#3f8600",
                                }}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Books"
                                value={1500}
                                valueStyle={{
                                    color: "#3f8600",
                                }}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Income">
                        <Pie data={incomeData} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Expense">
                        <Pie data={expenseData} />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Due / Paid">
                        <Pie data={duePaidData} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}
