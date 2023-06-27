import React, { useEffect, useState, useRef } from 'react';
import '@styles/globals.css'
import Select, { MenuPlacement, PlaceholderProps } from 'react-select';

interface DropdownProps {
    label: string;
    placeholder: string;
    hasLogo?: boolean;
    isDisabled: boolean;
    dropPosition: MenuPlacement;
    options?: LabelValueProps[]
}

interface LabelValueProps {
    label: string;
    value: string;
}

const Dropdown = ({ label, placeholder, hasLogo, isDisabled, dropPosition, options }: DropdownProps) => {
    const [values, setValues] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<any>("");
    const [selected, setSelected] = useState<any>("");
    const [isOpen, setIsOpen] = useState<any>(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dropUp, setDropUp] = useState(false);
    const dropdownRef = useRef<any>(null);
    const menuRef = useRef<any>(null);

    return (
        <div className="py-2 border-dashed border-b-2">
            <div className="py-2 font-bold flex">
                <label className="text-[#777]">{label}</label>
                {hasLogo &&
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-auto text-gray-400">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                }
            </div>
            <Select menuPlacement={dropPosition} options={options} placeholder={placeholder}/>
        </div>
    )
}

export default Dropdown