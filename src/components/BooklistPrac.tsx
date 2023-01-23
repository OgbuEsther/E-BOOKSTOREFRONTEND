import React, { useState } from "react";
import styled from "styled-components";
import pic from "../Assets/copy.png";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

interface MyData {
	_id: string;
	ISBN: string;
	author: string;
	authorImage: string;
	coverImage: string;
	category: string;
	summary: string;
	title: string;
	views: string[];
}

const BooklistPrac = () => {
    const [bookData, setBookData] = useState<MyData[]>([])
    const [ipState, setIpState] = useState("")

    //getting ip address
    const getIpAddress = async () => {
        await axios.get(
            "https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce/197.210.79.176"
        )
        .then((res) => {
            setIpState(res.data.IPv4)
        })
    }

    //getting all the books from our database
    const fetch = async () => {
        await axios.get(
            "http://localhost:2442/server/getall"
        )
        .then((res) => {
            setBookData(res.data.data)
        })
    }

    //updating our views by pushing the ip address in the views array

   const updateViews = async (id: string) => {
    await axios.patch(
        `http://localhost:2442/server/views/${id}`,
        {
            ip: ipState
        }
    )
    .then((res) => {
        console.log(res)
    })
   }

   React.useEffect(() => {
    getIpAddress();
    fetch()
   }, [])
  return (
    <div>BooklistPrac</div>
  )
}

export default BooklistPrac