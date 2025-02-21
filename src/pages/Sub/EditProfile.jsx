import { motion } from "framer-motion";
import Input from "../../components/form/input";
import Button2 from "../../components/button/Button2";
import img from "../../assets/img/my-img.jpg";
import { FormProvider, useForm } from "react-hook-form";
// import { useProfile } from "../../context/ProfileContext"; // استفاده از ProfileContext
import { useProfile } from "../../context/profileContext"; 

function EditProfile() {
  const { profile, setProfile } = useProfile(); // دریافت اطلاعات پروفایل
  const methods = useForm({
    defaultValues: profile, // مقدار پیش‌فرض از اطلاعات ذخیره‌شده
  });

  const onSubmit = (data) => {
    setProfile(data); // ذخیره اطلاعات جدید در Context
  };

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-5 justify-between lg:flex-row mb-10">
        <h2 className="font-bold text-xl lg:text-2xl">Edit Profile</h2>
        <img
          src={img}
          alt="Profile"
          className="size-14 md:size-24 object-cover object-center rounded-full"
        />
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="firstName" placeholder="First Name" />
          <Input name="lastName" placeholder="Last Name" />
          <Input name="email" placeholder="Email" type="email" />
          <Input name="number" placeholder="Contact Number" type="tel" />
          <div className="flex justify-center gap-5 mt-10">
            <Button2
              title="Save"
              className="bg-orange-500 border-orange-500 hover:bg-transparent"
              type="submit"
            />
            <Button2 title="Cancel" className="border-orange-500" />
          </div>
        </form>
      </FormProvider>
    </motion.div>
  );
}

export default EditProfile;
