import React, { useState, useEffect } from 'react';
import AttendanceRecord from './AttendanceRecord';
import './AttendancePage.css';
import Navbar from './Navbar';
const AttendanceManagement = () => {
    const [checkinTime, setCheckinTime] = useState(null);
    const [checkoutTime, setCheckoutTime] = useState(null);
    const [workHours, setWorkHours] = useState({ hours: 0, minutes: 0 });
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    // Load attendance records from localStorage on component mount
    useEffect(() => {
        const savedRecords = JSON.parse(localStorage.getItem('attendanceRecords'));
        if (savedRecords) {
            setAttendanceRecords(savedRecords);
        }
    }, []);

    // Save attendance records to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
    }, [attendanceRecords]);

    const checkIn = () => {
        setCheckinTime(new Date());
        setCheckoutTime(null); // Reset checkout time
        setWorkHours({ hours: 0, minutes: 0 });
    };

    const checkOut = () => {
        if (!checkinTime) {
            alert("Please check-in first.");
            return;
        }

        const newCheckoutTime = new Date();
        setCheckoutTime(newCheckoutTime);

        const newWorkHours = calculateWorkHours(checkinTime, newCheckoutTime);
        setWorkHours(newWorkHours);

        addToAttendanceTable(checkinTime, newCheckoutTime, newWorkHours);

        setCheckinTime(null); // Reset checkin time
    };

    const calculateWorkHours = (checkin, checkout) => {
        const diff = checkout - checkin;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return { hours, minutes };
    };

    const addToAttendanceTable = (checkin, checkout, workHours) => {
        const newRecord = {
            date: formatDate(checkin),
            checkinTime: formatTimePart(checkin),
            checkoutTime: formatTimePart(checkout),
            workHours: formatTime(workHours)
        };

        setAttendanceRecords([newRecord, ...attendanceRecords]);
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const formatTimePart = (time) => {
        return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const formatTime = (workHours) => {
        return `${workHours.hours} hours ${workHours.minutes} minutes`;
    };

    return (
        <div>
            <Navbar/>
         

        <div className='container-atte'>
        <h2 class="first-heading">Attendance Dashboard</h2>
            <button onClick={checkIn}>Check-in</button>
            <button onClick={checkOut}>Check-out</button>
            <div>Check-in Time: {checkinTime ? formatTimePart(checkinTime) : '---'}</div>
            <div>Check-out Time: {checkoutTime ? formatTimePart(checkoutTime) : '---'}</div>
            <div>Work hours: {`${workHours.hours} hours ${workHours.minutes} minutes`}</div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Check-in Time</th>
                        <th>Check-out Time</th>
                        <th>Work Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record, index) => (
                        <AttendanceRecord key={index} record={record} />
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default AttendanceManagement;
