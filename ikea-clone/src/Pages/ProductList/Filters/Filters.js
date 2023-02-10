import React from 'react';
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown"
import Sort from "../Filters/Sort";
import NumOfSeats from './NumOfSeats';
import Category from './Category';
import Price from './Price';
import { useState } from 'react';
import './../Sofa/Sofa1.css'

function Filters(props) {

    const [filterBox, setFilterBox] = useState("");



    return (
        <div>

            <div className="Filters_productList" style={{ display: "block" }}>

                <button onClick={() => {

                    if (filterBox == "SORT") {
                        setFilterBox("");
                    } else {
                        setFilterBox("SORT");
                    }

                }} > Sort <FiChevronDown /> </button>

                <button onClick={() => {

                    if (filterBox == "NOS") {
                        setFilterBox("");
                    } else {
                        setFilterBox("NOS");
                    }

                }} >Number of Seats <FiChevronDown /> </button>

                <button onClick={() => {

                    if (filterBox == "CATEGORY") {
                        setFilterBox("");
                    } else {
                        setFilterBox("CATEGORY");
                    }

                }} >Category <FiChevronDown /> </button>

                <button onClick={() => {
                    
                    if(filterBox == "PRICE"){
                        setFilterBox("");   
                    }else{
                        setFilterBox("PRICE");   
                    }
                   
                }} >Price <FiChevronDown /> </button>

                <button onClick={() => {
                    
                    if(filterBox == "SHAPE"){
                        setFilterBox("");   
                    }else{
                        setFilterBox("SHAPE");   
                    }
                   
                }} >Shape <FiChevronDown /> </button>

                <button  onClick={() => {
                    
                    if(filterBox == "SORT"){
                        setFilterBox("");   
                    }else{
                        setFilterBox("SORT");   
                    }
                   
                }} >Clear All Filters <FiChevronDown /> </button>

            </div>

            <div>
                {
                    filterBox == "SORT" ? (<Sort />) : <></> 
                }
                {
                    filterBox == "NOS" ? (<NumOfSeats />) : <></>
                }
                {
                    filterBox == "CATEGORY" ? (<Category />) : <></>
                }
                {
                    filterBox == "PRICE" ? (<Price />) : <></>
                }
                {
                    filterBox == "SHAPE" ? (<Price />) : <></>
                }
            </div>

        </div>
    );
}

export default Filters;