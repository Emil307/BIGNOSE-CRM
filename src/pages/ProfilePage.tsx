import authState from "@/store/authState";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProfilePage: React.FC = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    authState.checkAuth(navigate);
    if (!authState.isAuth) {
      navigate("/");
    }
  }, [authState.isAuth]);

  return (
    <div>
      ProfilePage {authState.employee?.main_info?.name}{" "}
      <button onClick={() => authState.logout(navigate)}>выйти</button>
    </div>
  );
});
