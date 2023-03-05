import React, { useEffect } from "react";
import { Routes, Route, json } from "react-router-dom";

import ProtectedRoutes from "./components/PrivateRoute";
import PreventPublicRoute from "./components/PreventPublicRoute";

import PageLayout from "./components/PageLayout";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";

import AddStuff from "./pages/Administration/AddStuff";
import StuffList from "./pages/Administration/StuffList";

import Teachers from "./pages/Teachers";
import Routine from "./pages/Teachers/Routine";
import Result from "./pages/Teachers/Result";

import Class from "./pages/Academic/Class";
import GradeSystem from "./pages/Academic/GradeSystem";
import Subject from "./pages/Academic/Subject";
// import Monitoring from "./pages/Academic/Monitoring";

import AddStudent from "./pages/Academic/AddStudent";
import Attendance from "./pages/Teachers/Attendance";

import Account from "./pages/Students/Account";
import StudentList from "./pages/Students/List";
// import CIS from "./pages/Students/CIS";
// import ExamRoutine from"./pages/Students/ExamRoutine"

import Fees from "./pages/Account/Fees";

import FeesType from "./pages/Account/FeesType";
import Statement from "./pages/Account/Statement";

import { ConfigProvider } from "antd";
import en_US from "antd/es/locale/en_US";

import AccountType from "./pages/Account/Finance/AccountType";
import ExpenseHead from "./pages/Account/Finance/ExpenseHead";
import IncomeHead from "./pages/Account/Finance/IncomeHead";
import CreateAccount from "./pages/Account/Finance/CreateAccount";
import RecordIncome from "./pages/Account/Finance/RecordIncome";
import RecordExpense from "./pages/Account/Finance/RecordExpense";
import CreateRoutine from "./pages/Academic/Routine";
import { useSelector } from "react-redux";
import "dayjs/locale/bn-bd";
import Session from "./pages/Academic/Session";

export default function App() {
    return (
        <ConfigProvider locale={en_US}>
            <Routes>
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route element={<PageLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="teachers">
                            <Route index element={<Teachers />} />
                            <Route path="routine" element={<Routine />} />
                            <Route path="result" element={<Result />} />
                            <Route path="attendance" element={<Attendance />} />
                        </Route>
                        <Route path="administration">
                            <Route index element={<Teachers />} />
                            <Route path="add-stuff" element={<AddStuff />} />
                            <Route path="stuffs-list" element={<StuffList />} />
                        </Route>
                        <Route path="students">
                            <Route path="account" element={<Account />} />
                            <Route path="list" element={<StudentList />} />
                        </Route>
                        <Route path="academic">
                            <Route path="class" element={<Class />} />
                            <Route path="subject" element={<Subject />} />
                            <Route path="monitoring" element={<Subject />} />
                            <Route path="session" element={<Session />} />
                            <Route
                                path="student-list"
                                element={<StudentList />}
                            />
                            <Route path="routine" element={<CreateRoutine />} />
                            <Route
                                path="add-student"
                                element={<AddStudent />}
                            />
                            <Route
                                path="grading-system"
                                element={<GradeSystem />}
                            />
                        </Route>
                        <Route path="account">
                            <Route path="pay-fees" element={<Fees />} />
                            <Route path="fees-type" element={<FeesType />} />
                            <Route path="statement" element={<Statement />} />
                            <Route path="finance">
                                <Route
                                    path="account-type"
                                    element={<AccountType />}
                                />
                                <Route
                                    path="account"
                                    element={<CreateAccount />}
                                />
                                <Route
                                    path="expense-head"
                                    element={<ExpenseHead />}
                                />
                                <Route
                                    path="income-head"
                                    element={<IncomeHead />}
                                />
                                <Route
                                    path="record-income"
                                    element={<RecordIncome />}
                                />
                                <Route
                                    path="record-expense"
                                    element={<RecordExpense />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Route>
                <Route path="/login" element={<PreventPublicRoute />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path="/reset-password" element={<PreventPublicRoute />}>
                    <Route index element={<ResetPassword />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ConfigProvider>
    );
}

