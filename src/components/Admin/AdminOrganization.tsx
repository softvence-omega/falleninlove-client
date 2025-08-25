import LogoUpLoading from "../AdminDashboard/SettingAndBranding/LogoUploading";
import { Notification } from "../AdminDashboard/SettingAndBranding/Notification";
import Orgranisation from "../AdminDashboard/SettingAndBranding/Orgranisation";

export default function AdminOrganization() {
  return (
    <div>
      <Orgranisation></Orgranisation>
      <LogoUpLoading></LogoUpLoading>
      <Notification></Notification>
    </div>
  )
}
