import { createContext, useContext, useEffect, useState } from "react";

// ایجاد Context برای ذخیره اطلاعات پروفایل
const ProfileContext = createContext();

// تابعی برای استفاده از Context در کامپوننت‌ها
export const useProfile = () => useContext(ProfileContext);

// کامپوننتی که اطلاعات پروفایل را مدیریت می‌کند
export const ProfileProvider = ({ children }) => {
  const defaultProfile = {
    firstName: "Alizada",
    lastName: "Sharifi",
    email: "alizadasharifi2005@gmail.com",
    number: "",
    img: "", // تصویر پروفایل
  };

  // خواندن اطلاعات از localStorage (اگر اطلاعاتی وجود نداشت، مقدار پیش‌فرض تنظیم شود)
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem("profileData");
    return storedProfile ? JSON.parse(storedProfile) : defaultProfile;
  });

  // ذخیره اطلاعات در localStorage وقتی که تغییر می‌کنند
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profile));
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
