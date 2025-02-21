import Header from "../components/Header";
import SettingSection from "../components/SettingSection";
import { Bell, CircleHelp, Lock, Plus, User } from "lucide-react";
import Button from "../components/button/Button";
import { useState } from "react";
import img from "../assets/img/my-img.jpg";
import facebook from "../assets/img/facebook.svg";
import google from "../assets/img/google.png";
import x from "../assets/img/x.png";
import DangerZone from "../components/DangerZone";

function ToggleSwitch({ id, label }) {
  return (
    <div className="checkbox-wrapper-8">
      <input
        className="tgl tgl-skewed"
        id={id}
        type="checkbox"
        aria-label={label}
      />
      <label
        className="tgl-btn"
        data-tg-off="OFF"
        data-tg-on="ON"
        htmlFor={id}
      ></label>
    </div>
  );
}

function Setting() {
  const notifications = [
    "Push Notifications",
    "Email Alerts",
    "SMS Notifications",
  ];
  const [connectedAccounts, setConnectedAccounts] = useState([
    { id: 1, name: "Google", connected: true, icon: google },
    { id: 2, name: "Facebook", connected: true, icon: facebook },
    { id: 3, name: "Twitter", connected: false, icon: x },
  ]);

  const toggleAccountConnection = (id) => {
    setConnectedAccounts((prevAccounts) =>
      prevAccounts.map((acc) =>
        acc.id === id ? { ...acc, connected: !acc.connected } : acc
      )
    );
  };

  const getButtonClass = (connected) =>
    connected
      ? "bg-green-600 hover:bg-green-700"
      : "bg-gray-600 hover:bg-gray-700";

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Settings" />

      <main className="container py-6 lg:max-w-5xl mx-auto space-y-8">
        <SettingSection icon={User} title="Profile">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <img
              src={img}
              alt="Profile"
              className="size-14 md:size-24 object-cover object-center rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-100 capitalize">
                Alizada Sharifi
              </h3>
              <p className="text-gray-400 text-sm">
                alizadasharifi2005@gmail.com
              </p>
            </div>
          </div>
          <Button text="Edit Profile" background="bg-indigo-600" />
        </SettingSection>

        <SettingSection icon={Bell} title="Notification">
          <ul className="space-y-5">
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{notification}</span>
                <ToggleSwitch
                  id={`notification-${index}`}
                  label={notification}
                />
              </li>
            ))}
          </ul>
        </SettingSection>

        <SettingSection icon={Lock} title="Security">
          <ul>
            <li className="flex items-center justify-between">
              <span className="text-gray-300">Two-Factor Authentication</span>
              <ToggleSwitch
                id="security-2fa"
                label="Two-Factor Authentication"
              />
            </li>
          </ul>
          <Button
            text="Change Password"
            background="bg-indigo-600"
           
          />
        </SettingSection>

        <SettingSection icon={CircleHelp} title="Connected Accounts">
          {connectedAccounts.map((account) => (
            <div
              className="flex items-center justify-between py-1"
              key={account.id}
            >
              <div className="flex gap-3">
                <img
                  src={account.icon}
                  alt={account.name}
                  className="size-6 object-cover rounded-full"
                />
                <span className="text-gray-300">{account.name}</span>
              </div>
              <button
                className={`px-3 py-1 rounded transition duration-200 ${getButtonClass(
                  account.connected
                )}`}
                onClick={() => toggleAccountConnection(account.id)}
              >
                {account.connected ? "Connected" : "Connect"}
              </button>
            </div>
          ))}

          <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
            <Plus size={18} className="mr-2" /> Add Account
          </button>
        </SettingSection>

        <DangerZone />
      </main>
    </div>
  );
}

export default Setting;
