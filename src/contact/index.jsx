import React, { useState } from "react";
import "./main.scss";
import { instance } from "../axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function Contact() {
  const req = () => {
    return instance.get("/information");
  };

  const info = useQuery({ queryKey: ["todos"], queryFn: req });

  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const inf = (e) => {
    e.preventDefault();
    instance
      .post("/message", { subject, phone, message })
      .then((dat) => console.log(dat))
      .then((res) => toast.success("wow so easy"))
      .catch((err) => toast.error("wrong credentials"));
  };

  console.log(phone, subject, message);
  return (
    <div className="contact_page">
      <h1>Contact page</h1>

      <form onSubmit={(e) => inf(e)}>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="phone"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="subject"
        />

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="text"
        />
        <button>send</button>
      </form>
      {info?.data?.data?.data?.map((ad) => {
        return (
          <div className="contact">
            <a target="_blank" href={ad?.addressMap}>
              <span>Address: </span>
              {ad?.address}
            </a>
            <p>
              <span>Email: </span>
              {ad?.email}
            </p>
            <p>
              <span>Instagram: </span>
              {ad?.instagram}
            </p>
            <p>
              <span>Telegram: </span>
              {ad?.telegram}
            </p>
            <p>
              <span>Phone: </span>
              {ad?.phone}
            </p>
          </div>
        );
      })}
    </div>
  );
}
