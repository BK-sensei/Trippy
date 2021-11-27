import React from 'react';

import { BiWifi, BiDrink, BiHandicap, BiFridge } from 'react-icons/bi';
import { FaDog, FaSmokingBan, FaSwimmer, FaShuttleVan } from 'react-icons/fa';
import { MdDryCleaning, MdRoomService, MdLuggage, MdOutlineAir, MdFreeBreakfast, MdRestaurant } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { SiGotomeeting } from 'react-icons/si';
import { GrSpa, GrLanguage } from 'react-icons/gr';

const Icons = (props) => {

    return (
        <>
            {props.commodity === "wifi" && <BiWifi />}
            {props.commodity === "bar" && <BiDrink />}
            {props.commodity === "animals" && <FaDog />}
            {props.commodity === "non smoking" && <FaSmokingBan />}
            {props.commodity === "dry cleaning" &&  <MdDryCleaning />}
            {props.commodity === "multilingual staff" &&  <GrLanguage />}
            {props.commodity === "suites" &&  <IoIosBed />}
            {props.commodity === "swimming pool" &&  <FaSwimmer />}
            {props.commodity === "restaurant" &&  <MdRestaurant />}
            {props.commodity === "gym" &&  <CgGym />}
            {props.commodity === "room service" &&  <MdRoomService />}
            {props.commodity === "spa" &&  <GrSpa />}
            {props.commodity === "disabled access" &&  <BiHandicap />}
            {props.commodity === "family" &&  <MdRestaurant />}
            {props.commodity === "conciergerie" &&  <MdLuggage />}
            {props.commodity === "meeting rooms" &&  <SiGotomeeting />}
            {props.commodity === "shuttle" &&  <FaShuttleVan />}
            {props.commodity === "air conditioning" &&  <MdOutlineAir />}
            {props.commodity === "minibar" &&  <BiFridge />}
            {props.commodity === "breakfast included" &&  <MdFreeBreakfast />}
        </>
    );
}

export default Icons;