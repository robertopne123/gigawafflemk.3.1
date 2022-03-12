export const Enquire = () => {
  return (
    <div className="w-full px-4 py-20">
      <div className="max-w-[1250px] mx-auto grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="font-parkson text-5xl">Enquire Now</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
          ></input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
          ></input>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Contact Number"
            className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
          ></input>
          <select
            name="purpose"
            id="purpose"
            placeholder="Room Purpose"
            className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
          >
            <option value="0" className="hidden">
              Room Purpose
            </option>
            <option value="1">Podcast Recording</option>
            <option value="2">Video Recording</option>
            <option value="3">Photography</option>
          </select>
          <input
            type="number"
            name="people"
            id="people"
            placeholder="Number of People (MAX 4)"
            min="1"
            max="4"
            className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
          ></input>
          <div className="flex flex-row" id="cameraDiv">
            <label
              for="camera"
              className="py-2 px-4 font-parkson text-2xl text-black outline-none"
            >
              Are you bringing your own camera?
            </label>
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                name="camera"
                id="camera"
                className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
              ></input>
            </div>
          </div>
          <div className="flex flex-row" id="cameraDiv">
            <label
              for="greenScreen"
              className="py-2 px-4 font-parkson text-2xl text-black outline-none"
            >
              Will you need to use a green screen?
            </label>
            <div className="flex flex-col justify-center">
              <input
                type="checkbox"
                name="greenScreen"
                id="greenScreen"
                className="py-2 px-4 font-parkson text-2xl bg-black text-white outline-none"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
