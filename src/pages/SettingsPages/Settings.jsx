import PasswordChange from "./PasswordChange";
import ProfileInfo from "./ProfileInfo";
import Preferences from "./Preferences";
import SecuritySettings from "./SecuritySettings";

const Settings = () => {
  return (
    <div className="bg-background-offwhite w-full  relative z-[-1]">
      <section className="p-5 flex justify-between items-center w-full">
        <div>
          <h1 className="text-[32px] font-semibold">Settings</h1>
          <p className="text-[rgb(108,117,125)] mt-2">
            Configure your application preferences, account settings, and
            integrations
          </p>
        </div>
      </section>
      <ProfileInfo />
      <PasswordChange/>
      <Preferences />
      <SecuritySettings/>
    </div>
  );
};

export default Settings;
