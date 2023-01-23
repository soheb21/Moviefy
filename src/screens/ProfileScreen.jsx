import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";
import { query, collection, where, onSnapshot } from "firebase/firestore";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "customers", user.uid, "subscriptions"));

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(async (subscription) => {
        // console.log(subscription.data());

        setSubscription(subscription.data().role)
        });
      });
    
  }, [user.uid]);

  return (
    <div className="profile">
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
           src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'
            alt=""
          />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <div className="profileScreen__plansHeading">
              <h3> {`Plans`} </h3>
              {subscription ? (
                <p>{`(Current: ${subscription})`}</p>
              ) : <p>{`Not subscribed`}</p>}
              
              </div>

              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profile_btn"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
