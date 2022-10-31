import React from "react";
import { Link } from "react-router-dom";
import Configuration from "./Configuration";
import Content from "./Content";
import DeliveryArea from "./DeliveryArea";
import LoyaltyScheme from "./LoyaltyScheme";
import MenuType from "./MenuType";
import OpenClose from "./OpenClose";
import ReferralScheme from "./ReferralScheme";
import RestaurantManagement from "./RestaurantManagement";
import SettingsApp from "./SettingsApp";
import "./SettingsTable.css";
import WorkingHours from "./WorkingHours";

function SettingsTable() {
  return (
    <>
      <div className="row sharebox">
        <div className="col-md-12 mx-5 mt-5 py-5 px-5 responsiveness">
          <nav>
            <div
              className="nav nav-tabs settingsnavs justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link tabbutton active"
                id="restaurant-management-tab"
                data-bs-toggle="tab"
                data-bs-target="#restaurant-management"
                type="button"
                role="tab"
                aria-controls="restaurant-management"
                aria-selected="true"
              >
                <i className="fa-solid fa-gears btnicon"></i>
                Restaurant Management
              </button>
              <button
                className="nav-link tabbutton"
                id="apps-tab"
                data-bs-toggle="tab"
                data-bs-target="#apps"
                type="button"
                role="tab"
                aria-controls="apps"
                aria-selected="false"
              >
                <i className="fa-solid fa-mobile-screen btnicon"></i>
                Apps
              </button>
              <button
                className="nav-link tabbutton"
                id="delivery-area-tab"
                data-bs-toggle="tab"
                data-bs-target="#delivery-area"
                type="button"
                role="tab"
                aria-controls="delivery-area"
                aria-selected="false"
              >
                <i className="fa-solid fa-location-dot btnicon"></i>
                Delivery Area
              </button>
              <button
                className="nav-link tabbutton"
                id="working-hrs-tab"
                data-bs-toggle="tab"
                data-bs-target="#working-hrs"
                type="button"
                role="tab"
                aria-controls="working-hrs"
                aria-selected="false"
              >
                <i className="fa-solid fa-clock btnicon"></i>
                Working Hours
              </button>
              <button
                className="nav-link tabbutton"
                id="open-close-tab"
                data-bs-toggle="tab"
                data-bs-target="#open-close"
                type="button"
                role="tab"
                aria-controls="open-close"
                aria-selected="false"
              >
                <i className="fa-solid fa-house btnicon"></i>
                Open/Close
              </button>
              <button
                className="nav-link tabbutton"
                id="menu-type-tab"
                data-bs-toggle="tab"
                data-bs-target="#menu-type"
                type="button"
                role="tab"
                aria-controls="menu-type"
                aria-selected="false"
              >
                <i className="fa-solid fa-bars btnicon"></i>
                Menu Type
              </button>
              <button
                className="nav-link tabbutton"
                id="loyalty-scheme-tab"
                data-bs-toggle="tab"
                data-bs-target="#loyalty-scheme"
                type="button"
                role="tab"
                aria-controls="loyalty-scheme"
                aria-selected="false"
              >
                <i className="fa-solid fa-crown btnicon"></i>
                Loyalty Scheme
              </button>
              <button
                className="nav-link tabbutton"
                id="referral-scheme-tab"
                data-bs-toggle="tab"
                data-bs-target="#referral-scheme"
                type="button"
                role="tab"
                aria-controls="referral-scheme"
                aria-selected="false"
              >
                <i className="fa-solid fa-gift btnicon"></i>
                Referral Scheme
              </button>
              <button
                className="nav-link tabbutton"
                id="config-tab"
                data-bs-toggle="tab"
                data-bs-target="#config"
                type="button"
                role="tab"
                aria-controls="config"
                aria-selected="false"
              >
                <i className="fa-solid fa-list-check btnicon"></i>
                Config
              </button>
              <button
                className="nav-link tabbutton"
                id="content-tab"
                data-bs-toggle="tab"
                data-bs-target="#content"
                type="button"
                role="tab"
                aria-controls="content"
                aria-selected="false"
              >
                <i className="fa-solid fa-heading btnicon"></i>
                Content
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="row sharebox">
        <div className="col-lg-12 bs br mx-5 mb-5 py-5 px-5 responsiveness">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="restaurant-management"
              role="tabpanel"
              aria-labelledby="restaurant-management-tab"
            >
              <RestaurantManagement/>
            </div>
            <div
              className="tab-pane fade"
              id="apps"
              role="tabpanel"
              aria-labelledby="apps-tab"
            >
              <SettingsApp/>
            </div>
            <div
              className="tab-pane fade"
              id="delivery-area"
              role="tabpanel"
              aria-labelledby="delivery-area-tab"
            >
              <DeliveryArea/>
            </div>
            <div
              className="tab-pane fade"
              id="working-hrs"
              role="tabpanel"
              aria-labelledby="working-hrs-tab"
            >
              <WorkingHours/>
            </div>
            <div
              className="tab-pane fade"
              id="open-close"
              role="tabpanel"
              aria-labelledby="open-close-tab"
            >
              <OpenClose/>
            </div>
            <div
              className="tab-pane fade"
              id="menu-type"
              role="tabpanel"
              aria-labelledby="menu-type-tab"
            >
              <MenuType/>
            </div>
            <div
              className="tab-pane fade"
              id="loyalty-scheme"
              role="tabpanel"
              aria-labelledby="loyalty-scheme-tab"
            >
              <LoyaltyScheme/>
            </div>
            <div
              className="tab-pane fade"
              id="referral-scheme"
              role="tabpanel"
              aria-labelledby="referral-scheme-tab"
            >
              <ReferralScheme/>
            </div>
            <div
              className="tab-pane fade"
              id="config"
              role="tabpanel"
              aria-labelledby="config-tab"
            >
              <Configuration/>
            </div>
            <div
              className="tab-pane fade"
              id="content"
              role="tabpanel"
              aria-labelledby="content-tab"
            >
              <Content/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsTable;
