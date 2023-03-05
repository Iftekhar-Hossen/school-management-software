import React from "react";
import { Link, Outlet } from "react-router-dom";

import { Layout, Menu, theme, Button } from "antd";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
let items = [
    getItem(
        <Link to={"/"}>Dashboard</Link>,
        "dashboard",
        <svg
            t="1672896518954"
            className="icon scale-[2]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12651"
            data-spm-anchor-id="a313x.7781069.0.i2"
            width="14"
            height="14"
        >
            <path
                d="M267.168 454.624v316.48h152V598.224c0-6.144 4.992-11.12 11.136-11.12h169.728c6.16 0 11.136 4.976 11.136 11.12v172.88h136V453.6l-239.36-188.848-240.64 189.856z m-48 37.872l-39.36 31.04a16 16 0 0 1-22.464-2.656l-9.904-12.56a16 16 0 0 1 2.656-22.464l347.792-274.416a16 16 0 0 1 19.84 0l347.792 274.4a16 16 0 0 1 2.656 22.48l-9.92 12.56a16 16 0 0 1-22.464 2.656l-40.624-32.048v292.48a35.136 35.136 0 0 1-35.136 35.136H254.304a35.136 35.136 0 0 1-35.136-35.136V492.496z m248 270.608h96v-128h-96v128z"
                fill="#fff"
                p-id="12652"
                data-spm-anchor-id="a313x.7781069.0.i1"
                className="selected"
            ></path>
        </svg>,
    ),
    getItem(
        "Administration",
        "admin",
        <svg
            t="1672896518954"
            className="icon scale-[1.1]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12651"
            data-spm-anchor-id="a313x.7781069.0.i2"
            width="14"
            height="14"
        >
            <path
                d="M659.2 640h115.2l185.6 198.4v185.6H64v-185.6l179.2-198.4h121.6l64 128h51.2l-51.2-128h166.4l-51.2 128h51.2l64-128z m64 128H300.8l-108.8 128h640l-108.8-128zM512 448c88.3648 0 160-71.6352 160-160S600.3648 128 512 128 352 199.6352 352 288s71.6352 160 160 160z m0 128c-159.0592 0-288-128.9408-288-288S352.9408 0 512 0s288 128.9408 288 288-128.9408 288-288 288z m-211.2 448h128l51.2-128H326.4l-25.6 128z m300.8 0h128l-32-128H550.4l51.2 128z m-121.6-256l-51.2 256h172.8l-57.6-256H480z"
                fill="#fff"
                p-id="12652"
                data-spm-anchor-id="a313x.7781069.0.i1"
                className="selected"
            ></path>
        </svg>,
        [
            getItem(
                <Link to={"/administration/add-stuff"}>Add Stuff</Link>,
                "admin1",
            ),
            getItem(
                <Link to={"/administration/stuffs-list"}>Stuffs List</Link>,
                "teachers1",
            ),
        ],
    ),
    getItem(
        "Students",
        "students",
        <svg
            t="1672896518954"
            className="icon scale-[1.8]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12651"
            data-spm-anchor-id="a313x.7781069.0.i2"
            width="14"
            height="14"
        >
            <path
                d="M702.511628 570.677581a23.813953 23.813953 0 0 1 23.647256 21.051535l0.166697 2.762419-0.023814 78.252651h78.276466a23.813953 23.813953 0 0 1 2.762418 47.461209l-2.762418 0.166698h-78.276466L726.325581 798.624744a23.813953 23.813953 0 0 1-47.461209 2.762419L678.697674 798.624744l-0.023814-78.252651h-78.228837a23.813953 23.813953 0 0 1-2.762418-47.461209l2.762418-0.166698H678.697674L678.697674 594.491535a23.813953 23.813953 0 0 1 23.813954-23.813954zM481.16093 198.917953l204.395163 103.709768a33.744372 33.744372 0 0 1 0 58.463256c-9.144558 5.262884-19.21786 10.406698-30.529488 15.645767l-10.454326 4.715163-41.769674 17.574698a143.145674 143.145674 0 0 1-51.676279 149.14679 213.849302 213.849302 0 0 1 65.726511 45.41321 23.813953 23.813953 0 0 1-33.887256 33.458604A166.697674 166.697674 0 0 0 297.674419 744.186047a23.813953 23.813953 0 0 1-47.627907 0 214.373209 214.373209 0 0 1 127.595162-196.06028A142.526512 142.526512 0 0 1 321.488372 434.604651c0-13.359628 1.833674-26.290605 5.262884-38.578604l-36.340093-15.264745a606.827163 606.827163 0 0 1-10.621023-4.858046l0.023813 75.013953a23.813953 23.813953 0 0 1-47.461209 2.786233l-0.166697-2.786233v-119.069767c0-6.02493 2.238512-11.549767 5.953488-15.717209a33.244279 33.244279 0 0 1 10.573395-11.859349l3.524465-2.238512 199.275163-101.066419c9.382698-5.405767 20.71814-5.953488 29.648372-2.048zM464.372093 339.348837a95.255814 95.255814 0 1 0 0 190.511628 95.255814 95.255814 0 0 0 0-190.511628z m4.000744-93.588837l-170.007814 86.206512 3.572093 1.714604 9.025489 4.072186 36.149581 15.193303A142.717023 142.717023 0 0 1 464.372093 291.72093a142.740837 142.740837 0 0 1 118.998326 63.773768l43.579534-18.336745 7.858605-3.572093 3.405395-1.619348-169.841116-86.206512z"
                fill="#fff"
                p-id="20903"
            ></path>
        </svg>,
        [getItem(<Link to={"/students/account"}>Account</Link>, "students1")],
    ),
    getItem(
        "Teachers",
        "teachers",
        <svg
            t="1672896518954"
            className="icon scale-[1.5]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12651"
            data-spm-anchor-id="a313x.7781069.0.i2"
            width="14"
            height="14"
        >
            <path
                d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m-21.333333 576H372.693333a21.333333 21.333333 0 0 0-20.224 14.506667l-0.896 3.84-17.706666 123.52a339.498667 339.498667 0 0 0 167.509333 49.962667L512 853.333333c65.28 0 126.250667-18.346667 178.090667-50.090666l-17.664-123.605334a21.333333 21.333333 0 0 0-17.194667-17.92l-3.925333-0.384H533.333333L554.666667 810.666667l-42.666667 21.333333-42.666667-21.333333 21.333334-149.333334zM512 170.666667a341.333333 341.333333 0 0 0-236.330667 587.648l12.544-87.722667A85.333333 85.333333 0 0 1 372.693333 597.333333h70.272a42.666667 42.666667 0 0 1 38.144 23.594667L490.666667 640h42.666666l9.557334-19.072a42.666667 42.666667 0 0 1 38.144-23.594667h70.272a85.333333 85.333333 0 0 1 84.48 73.258667l12.544 87.722667A341.333333 341.333333 0 0 0 512 170.666667z m0 106.666666a128 128 0 0 1 128 128v21.333334a128 128 0 0 1-256 0V320a42.666667 42.666667 0 0 1 42.666667-42.666667h85.333333zM512 341.333333h-64v85.333334a64 64 0 0 0 127.701333 6.144L576 426.666667v-21.333334a64 64 0 0 0-57.856-63.701333L512 341.333333z"
                fill="#fff"
                p-id="23115"
            ></path>
        </svg>,
        [
            getItem(
                <Link to={"/teachers/attendance"}>Attendance</Link>,
                "teacher1",
            ),
            getItem(<Link to={"/teachers/routine"}>Routine</Link>, "teacher2"),
            getItem(<Link to={"/teachers/result"}>Result</Link>, "teacher3"),
        ],
    ),
    getItem(
        "Academics",
        "academic",
        <svg
            t="1672896518954"
            className="icon scale-[1.3]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12651"
            data-spm-anchor-id="a313x.7781069.0.i2"
            width="14"
            height="14"
        >
            <path
                d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H212V212h200v200zM864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H212V612h200v200zM864 544H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H612V612h200v200z"
                p-id="3419"
                fill="#fff"
            ></path>
        </svg>,
        [
            getItem(
                <Link to={"/academic/add-student"}>Add Student</Link>,
                "academic1",
            ),
            getItem(<Link to={"/academic/student-list"}>Students List</Link>, "academic6"),
            getItem(<Link to={"/academic/class"}>Add Class</Link>, "academic2"),
            getItem(
                <Link to={"/academic/monitoring"}>Monitoring</Link>,
                "academic3",
            ),
            getItem(
                <Link to={"/academic/grading-system"}>Grading system</Link>,
                "academic4",
            ),
            getItem(<Link to={"/academic/session"}>Session</Link>, "academic5"),
            getItem(<Link to={"/academic/subject"}>Subject</Link>, "academic8"),
            getItem(<Link to={"/academic/routine"}>Routine</Link>, "academic7"),
        ],
    ),
    getItem(
        "Accounts",
        "account",
        <svg
            t="1672896518954"
            className="icon scale-[1.3]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12651"
            data-spm-anchor-id="a313x.7781069.0.i2"
            width="14"
            height="14"
        >
            <path
                d="M565.8 489.5c24.9 9 40.4 4.2 45.2 2.4 15.2-10 20.5-70 1.8-79.6-6-7.3-51.2-8.4-56.1-2.4 4.2-2.4 2.8-33.6 0-36.2-13.7-12.8-44.6-13.9-59.1 0-4.2 2.4-6.6 33.2 0 37.4-44.6 16.3-73.5 50.7-77.2 61.5-7.2 6.6-25.9 51.9 0 91.6 25.9 39.8 116.3 71.1 133.8 83.2s13.9 66.3 0 69.9c-3 8.4-73.5 10.9-107.3 4.8 0.6-20.5 0-13.3-4.2-21.7-4.2-8.5-45.2-6.7-51.2 0-6 6.6-10.2 65 0.6 72.3 16.3 10.2 98.3-2.4 103.1 3.6 4.8 6-8.4 39.8 0 49.4 8.4 9.7 53.6 8.5 60.3 0 6.6-8.4-4.2-42.2 0-48.2s18.1-2.4 33.8-4.8c15.7-2.4 31.3-19.3 39.8-34.9 8.4-15.7 7.8-78.3 0-95.2-7.8-16.9-36.8-40.4-54.3-54.3-17.5-13.9-56.1-35.5-86.8-44.6-10.9-15.1-6.6-48.7 0-59.1 20.2-31.6 48.7-10.1 77.8 4.9z"
                fill="#fff"
                p-id="25288"
            ></path>
            <path
                d="M693.6 243.1l28.1-103c10.1-15 11.1-34.3 2.6-50.3C715.8 74 699.2 64 681.1 64L512.7 81.2 327 64c-18.1 0-34.6 10-43.1 25.9-3.8 7.2-5.7 15.1-5.7 23 0 9.6 2.8 19.1 8.3 27.3l32.1 105.1C199.9 259.1 75.2 327.5 75.2 505.9 75.2 808.6 210.7 960 513.4 960s435.4-151.4 435.4-454.1c0-182.8-134-251.1-255.2-262.8zM513.4 898.7c-226.3 0-339.5-113.2-339.5-339.5S346.5 285 511.2 281.5c164.7-3.6 341.6 51.4 341.6 277.7 0.1 226.3-113.1 339.5-339.4 339.5z"
                fill="#fff"
                p-id="25289"
            ></path>
        </svg>,
        [
            getItem(<Link to={"/account/pay-fees"}>Fee</Link>, "account1"),
            getItem(
                <Link to={"/account/fees-type"}>Fees Type </Link>,
                "account2",
            ),
            getItem(
                <Link to={"/account/statement"}>Statement</Link>,
                "account3",
            ),
            getItem("Finance", "finance", null, [
                getItem(
                    <Link to={"/account/finance/account"}>Create Account</Link>,
                    "finance1",
                ),
                getItem(
                    <Link to={"/account/finance/account-type"}>
                        Account Type
                    </Link>,
                    "finance2",
                ),
                getItem(
                    <Link to={"/account/finance/expense-head"}>
                        Expense Head
                    </Link>,
                    "finance3",
                ),
                getItem(
                    <Link to={"/account/finance/income-head"}>
                        Income Head
                    </Link>,
                    "finance4",
                ),
                getItem(
                    <Link to={"/account/finance/record-income"}>
                        Record Income
                    </Link>,
                    "finance5",
                ),
                getItem(
                    <Link to={"/account/finance/record-expense"}>
                        Record Expense
                    </Link>,
                    "finance6",
                ),
            ]),
        ],
    ),
];

export default function Menubar() {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            items={items}
            theme="dark"
        />
    );
}
