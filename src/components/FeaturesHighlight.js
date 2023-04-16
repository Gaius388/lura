import Image from "next/image";
import rocket from "../../public/rocket.svg";
import multiDevices from "../../public/devices.svg";
import vault from "../../public/vault.svg";
import wifi from "../../public/wifi.svg";

const FeaturesHighlight = () => {
  return (
    <section className="grid sm:grid-cols-4 sm:gap-0 gap-4 text-center grid-cols-2 mx-[3.5em] my-[6em] text-xs sm:text-sm">
      <div className="grid justify-items-center">
        <Image src={rocket} alt="rocket" />
        <p className="font-semibold">Hi speed</p>
      </div>
      <div className="grid justify-items-center">
        <Image src={multiDevices} alt="multi_devices" />
        <p className="font-semibold">Add Multiple Devices</p>
      </div>
      <div className="grid justify-items-center">
        <Image src={vault} alt="vault" />
        <p className="font-semibold">Ultra Secure</p>
      </div>
      <div className="grid justify-items-center">
        <Image src={wifi} alt="wifi" />
        <p className="font-semibold">Unrestricted Access</p>
      </div>
    </section>
  );
}

export default FeaturesHighlight