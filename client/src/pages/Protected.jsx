import React, { useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ component: Component, ...rest }) {
  let navigate = useNavigate();
  const [user, isFetching] = useSelector((state) => {
    return [state.auth.login.currentUser, state.auth.login.isFetching];
  });
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, isFetching]);

  const body = isFetching ? (
    <div className="item-center">
      <BounceLoader color="#36d7b7" />
    </div>
  ) : (
    <Component {...rest} />
  );

  return body;
}

export default Protected;
