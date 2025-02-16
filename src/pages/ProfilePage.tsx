import authState from "@/store/authState";
import { observer } from "mobx-react-lite";
import React from "react";

export const ProfilePage: React.FC = observer(() => {
  return <div>ProfilePage {authState.employee?.name}</div>;
});
