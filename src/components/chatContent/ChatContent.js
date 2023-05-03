import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      type: "",
      msg: "Hello ,good morning every one?",
    },
    {
      key: 2,
      image:
        "https://as1.ftcdn.net/v2/jpg/05/11/55/94/1000_F_511559451_3FJVfIQkA893IFyWgIoB9j2ZAYj3s3fs.jpg",
      type: "other",
      msg: "very good morning ",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "hlo , very good morning ",
    },
    {
      key: 4,
      image:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      type: "",
      msg: "tommorrow a last date submit your assignment up to 9 AM",
    },
    {
      key: 5,
      image:
        "https://as2.ftcdn.net/v2/jpg/05/11/55/91/1000_F_511559197_RarEzxmj49kYSyte9zRpgO2Mt2ggDYVp.jpg",
      type: "other",
      msg: "Finally last date ",
    },
    {
      key: 6,
      image:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      type: "",
      msg: "yes ,this is last date please submit every one your assignment ",
    },
    {
      key: 7,
      image:
        "https://as1.ftcdn.net/v2/jpg/05/11/56/00/1000_F_511560050_1zEgwhpGTeUDvbJ449TlV67TNEACpV0M.jpg",
      type: "other",
      msg: "I'm taliking about the project",
    },
    {
      key: 8,
      image:
        "https://as2.ftcdn.net/v2/jpg/05/11/55/89/1000_F_511558996_sPVESAtBNgKl4tVFdrgtFAGra7GpbhCf.jpg",
      type: "other",
      msg: "i already submit my project ",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://as2.ftcdn.net/v2/jpg/05/23/19/57/1000_F_523195791_vd0xIUKYOuKKgRywtoGB4wmaltIU6FSG.jpg"
              />
              <p>project-team</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
