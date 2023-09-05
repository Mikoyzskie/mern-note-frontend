import React from 'react';

function formatDate(date: string) {
    const currentDate = new Date();
    const inputDate = new Date(date);

    // Check if the year is the same as the current year
    if (currentDate.getFullYear() === inputDate.getFullYear()) {
        // If it's the same year, display only the full month name and day
        return inputDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });
    } else {
        // If it's a different year, display the full date
        return inputDate.toLocaleDateString();
    }
}

interface DateComponentProps {
    timestamp: string;
}

function DateComponent({ timestamp }: DateComponentProps) {
    const formattedDate = formatDate(timestamp);

    return (

        <span>{formattedDate}</span>

    );
}

export default DateComponent;
