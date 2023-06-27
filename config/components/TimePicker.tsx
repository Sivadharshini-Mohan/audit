import React, { useState, useEffect, useRef } from 'react'

interface TimePickerProps {
    date: Date;
}

const TimePicker = ({ date }: TimePickerProps) => {
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    const [filteredValues, setfilteredValues] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<any>(time);
    const [selectedValue, setSelectedValue] = useState<any>(time);
    const [isOpen, setIsOpen] = useState<any>(false);
    const timeRef = useRef<any>(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, []);

    useEffect(() => {

        !searchValue || searchValue.trim() === selectedValue?
        setfilteredValues(options) :
        setfilteredValues(options.filter((option: any) => option.value.includes(searchValue.trim())));
    }, [searchValue]);

    const handleOutsideClick = (event: any) => {
        if (timeRef.current && !timeRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleSelection = (selectedValue: any) => {
        setSelectedValue(selectedValue);
        setSearchValue(selectedValue);
        setIsOpen(!isOpen);
    };

    const isSelected = (value: any) => {
        if (!selectedValue) {
            return false;
        }
        return value.toLowerCase() === selectedValue.toLowerCase();
    }

    const options = [{ value: "", label: "(Unspecified)" },
    { value: "12:00 AM", label: "12:00 AM" }, { value: "12:15 AM", label: "12:15 AM" }, { value: "12:30 AM", label: "12:30 AM" }, { value: "12:45 AM", label: "12:45 AM" },
    { value: "01:00 AM", label: "01:00 AM" }, { value: "01:15 AM", label: "01:15 AM" }, { value: "01:30 AM", label: "01:30 AM" }, { value: "01:45 AM", label: "01:45 AM" },
    { value: "02:00 AM", label: "02:00 AM" }, { value: "02:15 AM", label: "02:15 AM" }, { value: "02:30 AM", label: "02:30 AM" }, { value: "02:45 AM", label: "02:45 AM" },
    { value: "03:00 AM", label: "03:00 AM" }, { value: "03:15 AM", label: "03:15 AM" }, { value: "03:30 AM", label: "03:30 AM" }, { value: "03:45 AM", label: "03:45 AM" },
    { value: "04:00 AM", label: "04:00 AM" }, { value: "04:15 AM", label: "04:15 AM" }, { value: "04:30 AM", label: "04:30 AM" }, { value: "04:45 AM", label: "04:45 AM" },
    { value: "05:00 AM", label: "05:00 AM" }, { value: "05:15 AM", label: "05:15 AM" }, { value: "05:30 AM", label: "05:30 AM" }, { value: "05:45 AM", label: "05:45 AM" },
    { value: "06:00 AM", label: "06:00 AM" }, { value: "06:15 AM", label: "06:15 AM" }, { value: "06:30 AM", label: "06:30 AM" }, { value: "06:45 AM", label: "06:45 AM" },
    { value: "07:00 AM", label: "07:00 AM" }, { value: "07:15 AM", label: "07:15 AM" }, { value: "07:30 AM", label: "07:30 AM" }, { value: "07:45 AM", label: "07:45 AM" },
    { value: "08:00 AM", label: "08:00 AM" }, { value: "08:15 AM", label: "08:15 AM" }, { value: "08:30 AM", label: "08:30 AM" }, { value: "08:45 AM", label: "08:45 AM" },
    { value: "09:00 AM", label: "09:00 AM" }, { value: "09:15 AM", label: "09:15 AM" }, { value: "09:30 AM", label: "09:30 AM" }, { value: "09:45 AM", label: "09:45 AM" },
    { value: "10:00 AM", label: "10:00 AM" }, { value: "10:15 AM", label: "10:15 AM" }, { value: "10:30 AM", label: "10:30 AM" }, { value: "10:45 AM", label: "10:45 AM" },
    { value: "11:00 AM", label: "11:00 AM" }, { value: "11:15 AM", label: "11:15 AM" }, { value: "11:30 AM", label: "11:30 AM" }, { value: "11:45 AM", label: "11:45 AM" },
    { value: "12:00 PM", label: "12:00 PM" }, { value: "12:15 PM", label: "12:15 PM" }, { value: "12:30 PM", label: "12:30 PM" }, { value: "12:45 PM", label: "12:45 PM" },
    { value: "01:00 PM", label: "01:00 PM" }, { value: "01:15 PM", label: "01:15 PM" }, { value: "01:30 PM", label: "01:30 PM" }, { value: "01:45 PM", label: "01:45 PM" },
    { value: "02:00 PM", label: "02:00 PM" }, { value: "02:15 PM", label: "02:15 PM" }, { value: "02:30 PM", label: "02:30 PM" }, { value: "02:45 PM", label: "02:45 PM" },
    { value: "03:00 PM", label: "03:00 PM" }, { value: "03:15 PM", label: "03:15 PM" }, { value: "03:30 PM", label: "03:30 PM" }, { value: "03:45 PM", label: "03:45 PM" },
    { value: "04:00 PM", label: "04:00 PM" }, { value: "04:15 PM", label: "04:15 PM" }, { value: "04:30 PM", label: "04:30 PM" }, { value: "04:45 PM", label: "04:45 PM" },
    { value: "05:00 PM", label: "05:00 PM" }, { value: "05:15 PM", label: "05:15 PM" }, { value: "05:30 PM", label: "05:30 PM" }, { value: "05:45 PM", label: "05:45 PM" },
    { value: "06:00 PM", label: "06:00 PM" }, { value: "06:15 PM", label: "06:15 PM" }, { value: "06:30 PM", label: "06:30 PM" }, { value: "06:45 PM", label: "06:45 PM" },
    { value: "07:00 PM", label: "07:00 PM" }, { value: "07:15 PM", label: "07:15 PM" }, { value: "07:30 PM", label: "07:30 PM" }, { value: "07:45 PM", label: "07:45 PM" },
    { value: "08:00 PM", label: "08:00 PM" }, { value: "08:15 PM", label: "08:15 PM" }, { value: "08:30 PM", label: "08:30 PM" }, { value: "08:45 PM", label: "08:45 PM" },
    { value: "09:00 PM", label: "09:00 PM" }, { value: "09:15 PM", label: "09:15 PM" }, { value: "09:30 PM", label: "09:30 PM" }, { value: "09:45 PM", label: "09:45 PM" },
    { value: "10:00 PM", label: "10:00 PM" }, { value: "10:15 PM", label: "10:15 PM" }, { value: "10:30 PM", label: "10:30 PM" }, { value: "10:45 PM", label: "10:45 PM" },
    { value: "11:00 PM", label: "11:00 PM" }, { value: "11:15 PM", label: "11:15 PM" }, { value: "11:30 PM", label: "11:30 PM" }, { value: "11:45 PM", label: "11:45 PM" },
    ];

    return (
        <div ref={timeRef} >
            <input
                className="border border-gray-300 w-20 focus:outline-none p-1"
                type="text"
                value={searchValue}
                onClick={() => setIsOpen(!isOpen)}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            {isOpen && filteredValues.length > 0 && <ul className={`p-1 bg-white mt-1 border border-gray-300 rounded max-h-60 overflow-y-auto fixed drop-shadow-lg z-50`}>
                {filteredValues && filteredValues.map((value: any) => (<li key={value.label} className={`p-1 hover:bg-gray-200 mt-1 ${isSelected(value.label) && "bg-gray-300"}`} onClick={() => handleSelection(value.value)}>{value.label}</li>))}
            </ul>}
        </div>
    )
}

export default TimePicker