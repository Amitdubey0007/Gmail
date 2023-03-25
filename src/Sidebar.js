import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import "./SidebarOptions.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOptions from "./SidebarOptions";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose">
        compose
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title="inbox"
        number={59}
        selected={true}
      />
      <SidebarOptions Icon={LabelImportantIcon} title="Snoozed" number={60} />
      <SidebarOptions Icon={NearMeIcon} title="Important" number={60} />
      <SidebarOptions Icon={NoteIcon} title="Sent" number={60} />
      <SidebarOptions Icon={AccessTimeIcon} title="Drafts" number={60} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
