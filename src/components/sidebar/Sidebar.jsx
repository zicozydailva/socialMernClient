import "./sidebar.css";
import {Bookmark, Event, Group, HelpOutline, MessageOutlined, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@material-ui/icons"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <MessageOutlined  />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <PlayCircleFilledOutlined />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <Group />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <Bookmark />
            <span className="sidebarListItemText">Boookmarks</span>
          </li>
          <li className="sidebarListItem">
              <HelpOutline />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
              <WorkOutline />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
              <Event />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <School />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li><li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
