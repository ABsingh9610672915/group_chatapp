import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      id: 1,
      name: "Abhijeet singh",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/05/11/55/94/1000_F_511559451_3FJVfIQkA893IFyWgIoB9j2ZAYj3s3fs.jpg",
      id: 2,
      name: "Raj kumar",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Rohit  singh",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/05/11/56/00/1000_F_511560050_1zEgwhpGTeUDvbJ449TlV67TNEACpV0M.jpg",
      id: 4,
      name: "Pooja sain",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/05/11/55/90/1000_F_511559043_rFBzjs7GsmnXvG2974TS3eT3l619PZVR.jpg",
      id: 5,
      name: "Rakesh kumar",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/05/11/55/91/1000_F_511559139_ERqA18k5Tm8wAj8x6iYan0BlseHNIYTm.jpg",
      id: 6,
      name: "Ram Misra",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/05/11/55/94/1000_F_511559451_3FJVfIQkA893IFyWgIoB9j2ZAYj3s3fs.jpg",
      id: 7,
      name: "Raju singh",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/05/11/55/91/1000_F_511559197_RarEzxmj49kYSyte9zRpgO2Mt2ggDYVp.jpg",
      id: 8,
      name: "Shivani  jain",
      active: false,
      isOnline: false,
    },
   
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
