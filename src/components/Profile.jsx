import { useProfile } from "../context/profileContext";
import SettingSection from "./SettingSection";
import Button from "./button/Button";

function Profile() {
  const { profile } = useProfile(); // دریافت اطلاعات پروفایل

  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <img
          src={profile.img || "default-profile.jpg"} // نمایش تصویر پروفایل
          alt="Profile"
          className="size-14 md:size-24 object-cover object-center rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-100 capitalize">
            {profile.firstName} {profile.lastName}
          </h3>
          <p className="text-gray-400 text-sm">{profile.email}</p>
        </div>
      </div>
      <Button
        text="Edit Profile"
        background="bg-indigo-600"
        path={"/editProfile"}
      />
    </SettingSection>
  );
}

export default Profile;
