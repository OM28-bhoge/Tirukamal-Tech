import React from 'react';

const AttendanceRecord = ({ record }) => {
    return (
        <tr>
            <td>{record.date}</td>
            <td>{record.checkinTime}</td>
            <td>{record.checkoutTime}</td>
            <td>{record.workHours}</td>
        </tr>
    );
}

export default AttendanceRecord;
